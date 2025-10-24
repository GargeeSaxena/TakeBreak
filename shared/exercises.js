// TakeBreak Exercise Database
// Neck and shoulder stretches for working professionals

export const exercises = [
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
    name: "Neck Flexion Stretch",
    duration: 30,
    instructions: [
      "Sit comfortably with back straight",
      "Gently lower chin toward chest",
      "Place hands behind head for gentle pressure",
      "Hold for 15-20 seconds",
      "Feel the stretch in the back of neck",
      "Return slowly to starting position"
    ],
    benefits: "Stretches posterior neck muscles",
    targetArea: "Neck (Back)",
    difficulty: "Easy"
  },
  {
    id: 7,
    name: "Seated Spinal Twist",
    duration: 40,
    instructions: [
      "Sit straight in your chair",
      "Place right hand on back of chair",
      "Place left hand on right knee",
      "Gently twist torso to the right",
      "Hold for 15 seconds",
      "Repeat on the other side"
    ],
    benefits: "Relieves back tension and improves spine mobility",
    targetArea: "Upper Back & Spine",
    difficulty: "Medium"
  },
  {
    id: 8,
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
  },
  {
    id: 9,
    name: "Eagle Arms Stretch",
    duration: 30,
    instructions: [
      "Extend arms forward at shoulder height",
      "Cross right arm over left at elbows",
      "Bend elbows and bring palms together if possible",
      "Lift elbows slightly and hold for 15 seconds",
      "Switch arms and repeat"
    ],
    benefits: "Deep stretch for shoulders and upper back",
    targetArea: "Shoulders & Upper Back",
    difficulty: "Medium"
  },
  {
    id: 10,
    name: "Wall Angels",
    duration: 40,
    instructions: [
      "Stand with back against wall",
      "Raise arms to shoulder height, elbows bent at 90°",
      "Press arms and back against wall",
      "Slowly raise arms overhead",
      "Lower back down",
      "Repeat 5 times"
    ],
    benefits: "Improves posture and shoulder mobility",
    targetArea: "Shoulders & Back",
    difficulty: "Medium"
  }
];

export const motivationalQuotes = [
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

export const snoozeMessages = [
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
  },
  {
    snoozeCount: "max",
    message: "Time for a mandatory health break! Your body has been patient enough. Let's stretch! 🧘",
    tone: "mandatory"
  }
];

export const breakCompleteMessages = [
  "Awesome! You've completed your break. Your neck and shoulders feel better already! 🌟",
  "Great job! You're investing in your health. Keep it up! 💚",
  "Well done! Your body appreciates the care. Back to work refreshed! ✨",
  "Perfect! That's how you prevent cervical issues. You're doing great! 🎯",
  "Excellent! You're building a healthy work habit. Your future self thanks you! 🙌"
];

// Helper function to get random exercise
export function getRandomExercise() {
  return exercises[Math.floor(Math.random() * exercises.length)];
}

// Helper function to get a set of exercises for a break
export function getExerciseSet(count = 3) {
  const shuffled = [...exercises].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to get appropriate message based on snooze count
export function getSnoozeMessage(count) {
  if (count >= 3) return snoozeMessages.find(m => m.snoozeCount === "max");
  return snoozeMessages.find(m => m.snoozeCount === count);
}

// Helper function to get random motivational quote
export function getRandomQuote() {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// Helper function to get random completion message
export function getCompletionMessage() {
  return breakCompleteMessages[Math.floor(Math.random() * breakCompleteMessages.length)];
}


