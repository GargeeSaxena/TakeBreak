// TakeBreak Background Service - Time-based Break System

const SNOOZE_DURATION = 5; // 5 minutes
const MAX_SNOOZES = 3;
const ALARM_PREFIX = 'takeBreak_';

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'activate') {
    activateBreaks(request.startTime, request.endTime, request.interval)
      .then(response => sendResponse(response))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  } else if (request.action === 'deactivate') {
    deactivateBreaks();
    sendResponse({ success: true });
  } else if (request.action === 'snooze') {
    handleSnooze();
    sendResponse({ success: true });
  }
  return true;
});

// Activate breaks with work hours
async function activateBreaks(startTime, endTime, interval) {
  try {
    // Clear all existing alarms
    await chrome.alarms.clearAll();

    // Calculate next break time
    const now = new Date();
    const nextBreak = calculateNextBreakTime(startTime, endTime, interval, now);

    if (!nextBreak) {
      // Outside work hours
      const nextWorkDay = calculateNextWorkDay(startTime);
      return {
        success: true,
        message: `Outside work hours. Next break: ${nextWorkDay}`
      };
    }

    // Schedule the break
    await scheduleBreak(nextBreak);

    // Save settings
    await chrome.storage.local.set({
      isActive: true,
      startTime: startTime,
      endTime: endTime,
      interval: interval,
      nextBreakTime: nextBreak.getTime(),
      snoozeCount: 0
    });

    return {
      success: true,
      nextBreakTime: nextBreak.getTime()
    };
  } catch (error) {
    console.error('Error activating breaks:', error);
    return { success: false, error: error.message };
  }
}

// Calculate next break time based on interval
function calculateNextBreakTime(startTime, endTime, interval, fromTime = new Date()) {
  const now = fromTime;
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);

  // Create Date objects for today's work hours
  const workStart = new Date(now);
  workStart.setHours(startHour, startMin, 0, 0);

  const workEnd = new Date(now);
  workEnd.setHours(endHour, endMin, 0, 0);

  // If work end is before work start, it means next day
  if (workEnd < workStart) {
    workEnd.setDate(workEnd.getDate() + 1);
  }

  // Check if we're within work hours
  if (now < workStart) {
    // Before work hours - first break of the day
    return calculateFirstBreakTime(workStart, interval);
  }

  if (now >= workEnd) {
    // After work hours - return null
    return null;
  }

  // Within work hours - calculate next break
  return calculateNextScheduledBreak(now, workEnd, interval);
}

// Calculate first break time of the day
function calculateFirstBreakTime(workStart, interval) {
  const firstBreak = new Date(workStart);
  const minutes = workStart.getMinutes();
  
  // Round up to next interval
  const nextInterval = Math.ceil(minutes / interval) * interval;
  
  if (nextInterval >= 60) {
    firstBreak.setHours(firstBreak.getHours() + 1);
    firstBreak.setMinutes(nextInterval - 60);
  } else {
    firstBreak.setMinutes(nextInterval);
  }
  
  firstBreak.setSeconds(0);
  firstBreak.setMilliseconds(0);
  
  return firstBreak;
}

// Calculate next scheduled break time
function calculateNextScheduledBreak(now, workEnd, interval) {
  const current = new Date(now);
  const minutes = current.getMinutes();
  
  // Calculate next interval time
  const nextInterval = Math.ceil((minutes + 1) / interval) * interval;
  
  const nextBreak = new Date(current);
  
  if (nextInterval >= 60) {
    nextBreak.setHours(nextBreak.getHours() + 1);
    nextBreak.setMinutes(nextInterval - 60);
  } else {
    nextBreak.setMinutes(nextInterval);
  }
  
  nextBreak.setSeconds(0);
  nextBreak.setMilliseconds(0);

  // Check if next break is within work hours
  if (nextBreak >= workEnd) {
    return null; // No more breaks today
  }

  return nextBreak;
}

// Calculate next work day start
function calculateNextWorkDay(startTime) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [hour, min] = startTime.split(':').map(Number);
  tomorrow.setHours(hour, min, 0, 0);
  
  return tomorrow.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Schedule break alarm
async function scheduleBreak(breakTime) {
  const alarmName = `${ALARM_PREFIX}${breakTime.getTime()}`;
  const when = breakTime.getTime();

  await chrome.alarms.create(alarmName, { when: when });
  console.log('Break scheduled for:', breakTime.toLocaleString());
}

// Deactivate all breaks
async function deactivateBreaks() {
  await chrome.alarms.clearAll();
  await chrome.storage.local.set({
    isActive: false,
    nextBreakTime: null,
    snoozeCount: 0
  });
  console.log('Breaks deactivated');
}

// Listen for alarms
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name.startsWith(ALARM_PREFIX)) {
    await handleBreakTime();
  }
});

// Handle break time
async function handleBreakTime() {
  const data = await chrome.storage.local.get(['snoozeCount', 'isActive', 'startTime', 'endTime', 'interval']);
  
  if (!data.isActive) return;

  const snoozeCount = data.snoozeCount || 0;

  if (snoozeCount >= MAX_SNOOZES) {
    // Force break
    await openBreakPage(true);
    await chrome.storage.local.set({ snoozeCount: 0 });
    
    // Schedule next break
    await scheduleNextBreak(data.startTime, data.endTime, data.interval);
  } else {
    // Show notification with snooze option
    await showBreakNotification(snoozeCount);
  }
}

// Handle snooze
async function handleSnooze() {
  const data = await chrome.storage.local.get(['snoozeCount', 'startTime', 'endTime', 'interval']);
  const currentCount = (data.snoozeCount || 0) + 1;

  // Clear existing alarms
  await chrome.alarms.clearAll();

  if (currentCount >= MAX_SNOOZES) {
    // Last snooze warning
    await chrome.notifications.create({
      type: 'basic',
      title: 'TakeBreak - Last Snooze!',
      message: '⚠️ This is your last snooze. Next break is mandatory for your health!',
      priority: 2,
      requireInteraction: true
    });
  }

  // Schedule snoozed break
  const snoozeBreak = new Date(Date.now() + SNOOZE_DURATION * 60 * 1000);
  await scheduleBreak(snoozeBreak);

  // Update storage
  await chrome.storage.local.set({
    snoozeCount: currentCount,
    nextBreakTime: snoozeBreak.getTime()
  });
}

// Schedule next break after current break completes
async function scheduleNextBreak(startTime, endTime, interval) {
  const now = new Date();
  const nextBreak = calculateNextBreakTime(startTime, endTime, interval, now);

  if (nextBreak) {
    await scheduleBreak(nextBreak);
    await chrome.storage.local.set({
      nextBreakTime: nextBreak.getTime()
    });
  } else {
    // No more breaks today, deactivate until next work day
    await chrome.storage.local.set({
      nextBreakTime: null
    });
  }
}

// Open break page
async function openBreakPage(isForced = false) {
  await chrome.tabs.create({
    url: chrome.runtime.getURL('break.html'),
    active: true
  });

  if (isForced) {
    await chrome.notifications.create({
      type: 'basic',
      title: 'TakeBreak - Mandatory Health Break',
      message: '🧘 Your body needs attention now! Take a 3-minute break for your cervical health.',
      priority: 2,
      requireInteraction: false
    });
  }
}

// Show break notification with snooze option
async function showBreakNotification(snoozeCount = 0) {
  let message = '';
  let title = 'TakeBreak - Break Time! 🧘';

  if (snoozeCount === 0) {
    const messages = [
      'Time to take a break! Your neck and shoulders need attention. 🤸',
      'Break time! Move away from screen for 3 minutes. 👀',
      'Stretch time! Prevent cervical issues with a quick break. 🌟',
      'Health break! Stand up, stretch, and breathe. 💪'
    ];
    message = messages[Math.floor(Math.random() * messages.length)];
  } else if (snoozeCount === 1) {
    title = 'TakeBreak - Second Reminder ⏰';
    message = 'Your body is still waiting. Take a 3-minute health break!';
  } else if (snoozeCount === 2) {
    title = 'TakeBreak - Important! ⚠️';
    message = 'Last chance to snooze. Your cervical health is important!';
  }

  await chrome.notifications.create('break-reminder', {
    type: 'basic',
    title: title,
    message: message,
    buttons: [
      { title: '✅ Take Break Now' },
      { title: '⏰ Snooze 5 min' }
    ],
    priority: 2,
    requireInteraction: true
  });
}

// Handle notification button clicks
chrome.notifications.onButtonClicked.addListener(async (notifId, buttonIndex) => {
  if (notifId === 'break-reminder') {
    if (buttonIndex === 0) {
      // Take break now
      await openBreakPage(false);
      await chrome.notifications.clear(notifId);
      
      // Schedule next break
      const data = await chrome.storage.local.get(['startTime', 'endTime', 'interval']);
      await chrome.storage.local.set({ snoozeCount: 0 });
      await scheduleNextBreak(data.startTime, data.endTime, data.interval);
    } else if (buttonIndex === 1) {
      // Snooze
      await handleSnooze();
      await chrome.notifications.clear(notifId);
    }
  }
});

// Initialize on install
chrome.runtime.onInstalled.addListener(async () => {
  console.log('TakeBreak extension installed');
  
  await chrome.storage.local.set({
    isActive: false,
    startTime: '09:00',
    endTime: '23:00',
    interval: 30,
    snoozeCount: 0,
    totalBreaksCompleted: 0,
    totalSkips: 0
  });
});

// Check on startup if we need to resume breaks
chrome.runtime.onStartup.addListener(async () => {
  const data = await chrome.storage.local.get(['isActive', 'startTime', 'endTime', 'interval']);
  
  if (data.isActive) {
    // Recalculate and schedule next break
    const nextBreak = calculateNextBreakTime(data.startTime, data.endTime, data.interval);
    if (nextBreak) {
      await scheduleBreak(nextBreak);
      await chrome.storage.local.set({
        nextBreakTime: nextBreak.getTime(),
        snoozeCount: 0
      });
    }
  }
});
