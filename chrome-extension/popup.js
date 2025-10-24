// TakeBreak Popup - Time-based Break System

// DOM Elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const intervalSelect = document.getElementById('interval');
const statusText = document.getElementById('statusText');
const nextBreak = document.getElementById('nextBreak');
const snoozeWarningDiv = document.getElementById('snoozeWarning');
const statsDiv = document.getElementById('stats');

// Load saved settings
chrome.storage.local.get([
  'isActive',
  'startTime',
  'endTime',
  'interval',
  'nextBreakTime',
  'snoozeCount',
  'totalBreaksCompleted'
], (data) => {
  // Restore saved values
  if (data.startTime) startTimeInput.value = data.startTime;
  if (data.endTime) endTimeInput.value = data.endTime;
  if (data.interval) intervalSelect.value = data.interval;

  // Update UI based on active state
  if (data.isActive) {
    updateUIActive();
    if (data.nextBreakTime) {
      updateNextBreakDisplay(data.nextBreakTime);
    }
    if (data.snoozeCount > 0) {
      showSnoozeWarning(data.snoozeCount);
    }
  }

  // Show stats
  if (data.totalBreaksCompleted > 0) {
    showStats(data);
  }
});

// Start button
startBtn.addEventListener('click', () => {
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;
  const interval = parseInt(intervalSelect.value);

  // Validation
  if (!startTime || !endTime) {
    alert('Please select both start and end times');
    return;
  }

  // Send to background script
  chrome.runtime.sendMessage({
    action: 'activate',
    startTime: startTime,
    endTime: endTime,
    interval: interval
  }, (response) => {
    if (response && response.success) {
      updateUIActive();
      if (response.nextBreakTime) {
        updateNextBreakDisplay(response.nextBreakTime);
      } else if (response.message) {
        nextBreak.textContent = response.message;
        nextBreak.style.color = '#e53e3e';
      }
    }
  });
});

// Stop button
stopBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'deactivate' }, (response) => {
    if (response && response.success) {
      updateUIInactive();
    }
  });
});

// Update UI - Active
function updateUIActive() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  startTimeInput.disabled = true;
  endTimeInput.disabled = true;
  intervalSelect.disabled = true;
  statusText.textContent = '✅ Active';
  statusText.parentElement.style.borderLeftColor = '#48bb78';
}

// Update UI - Inactive
function updateUIInactive() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  startTimeInput.disabled = false;
  endTimeInput.disabled = false;
  intervalSelect.disabled = false;
  statusText.textContent = 'Not active';
  statusText.parentElement.style.borderLeftColor = '#667eea';
  nextBreak.textContent = '';
  snoozeWarningDiv.innerHTML = '';
}

// Update next break display
function updateNextBreakDisplay(nextBreakTime) {
  const now = Date.now();
  const timeUntil = nextBreakTime - now;

  if (timeUntil > 0) {
    const hours = Math.floor(timeUntil / 3600000);
    const minutes = Math.floor((timeUntil % 3600000) / 60000);
    const seconds = Math.floor((timeUntil % 60000) / 1000);

    let displayText = 'Next break ';
    if (hours > 0) {
      displayText += `in ${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      displayText += `in ${minutes}m ${seconds}s`;
    } else {
      displayText += `in ${seconds}s`;
    }

    nextBreak.textContent = displayText;
    nextBreak.style.color = '#4a5568';

    // Update every second
    setTimeout(() => {
      chrome.storage.local.get(['nextBreakTime', 'isActive'], (data) => {
        if (data.isActive && data.nextBreakTime) {
          updateNextBreakDisplay(data.nextBreakTime);
        }
      });
    }, 1000);
  } else {
    nextBreak.textContent = 'Break time!';
    nextBreak.style.color = '#48bb78';
  }
}

// Show snooze warning
function showSnoozeWarning(count) {
  let message = '';
  let bgColor = '#fff3cd';
  let borderColor = '#ffc107';

  if (count === 1) {
    message = '⏰ You\'ve snoozed once. Try to take your next break!';
  } else if (count === 2) {
    message = '⚠️ Second snooze! Your body needs a break soon.';
  } else if (count >= 3) {
    message = '🚨 Last snooze! Next break is mandatory for your health.';
    bgColor = '#f8d7da';
    borderColor = '#dc3545';
  }

  snoozeWarningDiv.innerHTML = `
    <div style="background: ${bgColor}; padding: 10px; border-radius: 8px; margin: 10px 0; border-left: 4px solid ${borderColor};">
      <p style="margin:0; font-size:13px; font-weight:500; color:#856404;">${message}</p>
    </div>
  `;
}

// Show stats
function showStats(data) {
  const completed = data.totalBreaksCompleted || 0;

  if (completed > 0) {
    statsDiv.innerHTML = `
      <div style="background: #d4edda; padding: 10px; border-radius: 8px; margin-top: 10px; text-align: center;">
        <p style="margin:0; font-size:12px; color:#155724;">
          💚 <strong>${completed}</strong> break${completed > 1 ? 's' : ''} completed! Keep it up!
        </p>
      </div>
    `;
  }
}

// Listen for storage changes (for real-time updates)
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    if (changes.snoozeCount) {
      const count = changes.snoozeCount.newValue;
      if (count > 0) {
        showSnoozeWarning(count);
      } else {
        snoozeWarningDiv.innerHTML = '';
      }
    }
    if (changes.totalBreaksCompleted) {
      showStats({ totalBreaksCompleted: changes.totalBreaksCompleted.newValue });
    }
    if (changes.nextBreakTime && changes.nextBreakTime.newValue) {
      updateNextBreakDisplay(changes.nextBreakTime.newValue);
    }
  }
});
