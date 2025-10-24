// TakeBreak Exercise Database - Chrome Extension
// Copy of shared/exercises.js in vanilla JS format

const exercises = [
  {
    id: 1,
    name: "Neck Tilt Stretch",
    duration: 30,
    instructions: [
      "Sit up straight with shoulders relaxed",
      "Slowly tilt your head to the right, bringing ear toward shoulder",
      "Hold for 15 seconds, feeling the stretch on the left side",
      "Return to center and repeat on the left side",
      "Breathe deeply throughout"
    ],
    benefits: "Relieves neck tension and improves flexibility",
    targetArea: "Neck (Lateral)",
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Chin Tucks",
    duration: 20,
    instructions: [
      "Sit or stand with back straight",
      "Look straight ahead",
      "Gently pull your chin back (like making a double chin)",
      "Hold for 5 seconds",
      "Repeat 4 times"
    ],
    benefits: "Strengthens neck muscles and improves posture",
    targetArea: "Neck (Front)",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Shoulder Rolls",
    duration: 30,
    instructions: [
      "Sit comfortably with arms by your sides",
      "Roll shoulders backward in a circular motion 5 times",
      "Roll shoulders forward in a circular motion 5 times",
      "Keep movements slow and controlled",
      "Breathe naturally"
    ],
    benefits: "Releases shoulder tension and improves circulation",
    targetArea: "Shoulders",
    difficulty: "Easy"
  },
  {
    id: 4,
    name: "Neck Rotation",
    duration: 30,
    instructions: [
      "Sit up straight and relax shoulders",
      "Slowly turn your head to look over right shoulder",
      "Hold for 10 seconds",
      "Return to center slowly",
      "Repeat on left side",
      "Do 2 sets on each side"
    ],
    benefits: "Improves neck mobility and reduces stiffness",
    targetArea: "Neck (Rotation)",
    difficulty: "Easy"
  },
  {
    id: 5,
    name: "Shoulder Blade Squeeze",
    duration: 20,
    instructions: [
      "Sit up straight with arms at sides",
      "Squeeze shoulder blades together",
      "Hold for 5 seconds",
      "Release slowly",
      "Repeat 4 times"
    ],
    benefits: "Counteracts hunched posture from desk work",
    targetArea: "Upper Back & Shoulders",
    difficulty: "Easy"
  },
  {
    id: 6,
    name: "Shoulder Shrugs",
    duration: 20,
    instructions: [
      "Sit or stand with arms relaxed",
      "Raise both shoulders up toward ears",
      "Hold for 3 seconds",
      "Drop shoulders down suddenly, releasing tension",
      "Repeat 5 times"
    ],
    benefits: "Releases shoulder and neck tension quickly",
    targetArea: "Shoulders & Neck",
    difficulty: "Easy"
  }
];

const motivationalQuotes = [
  {
    quote: "Your health is an investment, not an expense.",
    context: "Taking breaks protects your long-term wellbeing"
  },
  {
    quote: "A 3-minute break now prevents hours of pain later.",
    context: "Prevention is better than cure"
  },
  {
    quote: "Your neck and shoulders will thank you!",
    context: "Every stretch counts"
  },
  {
    quote: "Productivity flows when your body is pain-free.",
    context: "Breaks improve focus"
  },
  {
    quote: "You wouldn't run a car without maintenance. Why run your body without breaks?",
    context: "Regular maintenance prevents breakdowns"
  },
  {
    quote: "Cervical health today, pain-free tomorrow.",
    context: "Invest in your health"
  },
  {
    quote: "The best workers know when to pause.",
    context: "Smart work includes smart breaks"
  },
  {
    quote: "3 minutes to move = hours of improved focus.",
    context: "Short breaks, big impact"
  },
  {
    quote: "Your future self will thank you for this break.",
    context: "Long-term thinking"
  },
  {
    quote: "Desk job doesn't mean desk pain. Take your break!",
    context: "You're in control of your health"
  }
];

const snoozeMessages = [
  {
    snoozeCount: 1,
    message: "Taking a quick 5-minute delay. Your body can wait a bit! 😊",
    tone: "friendly"
  },
  {
    snoozeCount: 2,
    message: "Second snooze! Remember, your neck and shoulders need attention soon. ⏰",
    tone: "gentle-reminder"
  },
  {
    snoozeCount: 3,
    message: "Last snooze! After this, we're taking a proper break together. Your health matters! 💪",
    tone: "firm-but-caring"
  }
];

const breakCompleteMessages = [
  "Awesome! You've completed your break. Your neck and shoulders feel better already! 🌟",
  "Great job! You're investing in your health. Keep it up! 💚",
  "Well done! Your body appreciates the care. Back to work refreshed! ✨",
  "Perfect! That's how you prevent cervical issues. You're doing great! 🎯",
  "Excellent! You're building a healthy work habit. Your future self thanks you! 🙌"
];

// Helper functions
function getRandomExercise() {
  return exercises[Math.floor(Math.random() * exercises.length)];
}

function getExerciseSet(count = 3) {
  const shuffled = [...exercises].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getSnoozeMessage(count) {
  if (count >= 3) {
    return {
      snoozeCount: "max",
      message: "Time for a mandatory health break! Your body has been patient enough. Let's stretch! 🧘",
      tone: "mandatory"
    };
  }
  return snoozeMessages.find(m => m.snoozeCount === count) || snoozeMessages[0];
}

function getRandomQuote() {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

function getCompletionMessage() {
  return breakCompleteMessages[Math.floor(Math.random() * breakCompleteMessages.length)];
}


