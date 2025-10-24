// Break Page Logic - TakeBreak Chrome Extension

const EXERCISE_PHASE_DURATION = 60; // 1 minute for exercise
const REST_PHASE_DURATION = 180; // 3 minutes for rest
const TOTAL_BREAK_DURATION = EXERCISE_PHASE_DURATION + REST_PHASE_DURATION; // 4 minutes total
let timeRemaining = TOTAL_BREAK_DURATION;
let timerInterval = null;
let currentExercise = null;
let currentPhase = 'exercise'; // 'exercise' or 'rest'

// DOM Elements
const timeDisplay = document.getElementById('timeRemaining');
const timerProgress = document.querySelector('.timer-progress');
const quoteElement = document.getElementById('motivationalQuote');
const quoteContext = document.getElementById('quoteContext');
const exerciseName = document.getElementById('exerciseName');
const exerciseTarget = document.getElementById('exerciseTarget');
const exerciseDifficulty = document.getElementById('exerciseDifficulty');
const exerciseSteps = document.getElementById('exerciseSteps');
const exerciseBenefits = document.getElementById('exerciseBenefits');
const nextExerciseBtn = document.getElementById('nextExerciseBtn');
const skipBtn = document.getElementById('skipBtn');
const breakComplete = document.getElementById('breakComplete');
const completeMessage = document.getElementById('completeMessage');
const returnToWorkBtn = document.getElementById('returnToWorkBtn');

// Initialize break page
function init() {
  loadQuote();
  loadExercise();
  startTimer();
  
  // Event listeners
  nextExerciseBtn.addEventListener('click', loadExercise);
  skipBtn.addEventListener('click', handleSkip);
  returnToWorkBtn.addEventListener('click', returnToWork);
  
  // Prevent accidental closure
  window.addEventListener('beforeunload', (e) => {
    if (timeRemaining > 0 && !breakComplete.style.display === 'block') {
      e.preventDefault();
      e.returnValue = 'Your break isn\'t complete yet. Are you sure you want to leave?';
    }
  });
}

// Load motivational quote
function loadQuote() {
  const quote = getRandomQuote();
  quoteElement.textContent = `"${quote.quote}"`;
  quoteContext.textContent = quote.context;
}

// Load exercise
function loadExercise() {
  currentExercise = getRandomExercise();
  
  exerciseName.textContent = currentExercise.name;
  exerciseTarget.textContent = `🎯 Target Area: ${currentExercise.targetArea}`;
  exerciseDifficulty.textContent = currentExercise.difficulty;
  exerciseBenefits.textContent = currentExercise.benefits;
  
  // Set difficulty badge color
  if (currentExercise.difficulty === 'Easy') {
    exerciseDifficulty.style.background = '#48bb78';
  } else if (currentExercise.difficulty === 'Medium') {
    exerciseDifficulty.style.background = '#ed8936';
  }
  
  // Load instructions
  exerciseSteps.innerHTML = '';
  currentExercise.instructions.forEach(instruction => {
    const li = document.createElement('li');
    li.textContent = instruction;
    exerciseSteps.appendChild(li);
  });
  
  // Add animation
  document.querySelector('.exercise-card').style.animation = 'none';
  setTimeout(() => {
    document.querySelector('.exercise-card').style.animation = 'slideIn 0.5s ease-out';
  }, 10);
}

// Start countdown timer
function startTimer() {
  updateTimerDisplay();
  updateTimerCircle();
  updatePhaseDisplay();
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    updateTimerCircle();
    
    // Check for phase transition
    if (currentPhase === 'exercise' && timeRemaining === REST_PHASE_DURATION) {
      transitionToRestPhase();
    }
    
    // Change color as time progresses
    if (timeRemaining <= 60) {
      timerProgress.style.stroke = '#ed8936'; // Orange for last minute
    }
    
    if (timeRemaining <= 0) {
      completeBreak();
    }
  }, 1000);
}

// Update timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Update circular progress
function updateTimerCircle() {
  const circumference = 283; // 2 * PI * radius (45)
  const progress = (timeRemaining / TOTAL_BREAK_DURATION) * circumference;
  timerProgress.style.strokeDashoffset = circumference - progress;
}

// Update phase display
function updatePhaseDisplay() {
  const subtitle = document.querySelector('.subtitle');
  if (currentPhase === 'exercise') {
    subtitle.textContent = '📝 Phase 1: Do the stretch exercise (1 minute)';
    subtitle.style.color = '#667eea';
  } else {
    subtitle.textContent = '🚶 Phase 2: Step away from your screen (3 minutes)';
    subtitle.style.color = '#48bb78';
  }
}

// Transition to rest phase
function transitionToRestPhase() {
  currentPhase = 'rest';
  updatePhaseDisplay();
  
  // Hide exercise section and show rest message
  document.querySelector('.exercise-section').style.display = 'none';
  
  // Update quote to rest message
  quoteElement.textContent = '"Now step away from your screen and relax."';
  quoteContext.textContent = 'Give your eyes and body a complete rest for 3 minutes';
  
  // Play transition sound (if available)
  playNotificationSound();
  
  // Change timer color to indicate rest phase
  timerProgress.style.stroke = '#48bb78';
}

// Complete break
function completeBreak() {
  clearInterval(timerInterval);
  
  // Hide main content
  document.querySelector('.timer-section').style.display = 'none';
  document.querySelector('.quote-section').style.display = 'none';
  document.querySelector('.exercise-section').style.display = 'none';
  document.querySelector('.skip-section').style.display = 'none';
  
  // Show completion message
  breakComplete.style.display = 'block';
  completeMessage.textContent = getCompletionMessage();
  
  // Reset snooze count
  chrome.storage.local.set({
    snoozeCount: 0,
    lastBreakTime: Date.now()
  });
  
  // Play success sound (if available)
  try {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUR0qbsf+');
    audio.play();
  } catch (e) {
    // Silently fail if audio doesn't work
  }
}

// Handle skip
function handleSkip() {
  const confirmed = confirm(
    'Skipping your break may increase risk of cervical issues.\n\n' +
    'Are you sure you want to skip? (Not recommended)'
  );
  
  if (confirmed) {
    // Track skip for analytics (optional)
    chrome.storage.local.get(['totalSkips'], (data) => {
      chrome.storage.local.set({
        totalSkips: (data.totalSkips || 0) + 1,
        snoozeCount: 0  // Reset snooze count
      });
    });
    
    // Close break page
    window.close();
  }
}

// Return to work
function returnToWork() {
  // Track completion for analytics
  chrome.storage.local.get(['totalBreaksCompleted'], (data) => {
    chrome.storage.local.set({
      totalBreaksCompleted: (data.totalBreaksCompleted || 0) + 1
    });
  });
  
  // Close break page
  window.close();
}

// Play notification sound
function playNotificationSound() {
  try {
    // Simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800; // Frequency in Hz
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (e) {
    // Silently fail if audio doesn't work
    console.log('Audio notification not available');
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);


