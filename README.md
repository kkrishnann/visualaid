# Accessible Question Application

A web application designed for visually impaired users with screen reader support and accessibility features.

## Features

### Accessibility Features
- **Screen Reader Optimized**: Tested with built in voice readers on phones and browser
- **Keyboard Navigation**: Full keyboard support with Enter, Space, and Escape keys
- **Focus Management**: Automatic focus management for easy navigation
- **High Contrast Support**: CSS media queries for high contrast mode
- **Welcome Screen**: Clear entry point with prominent start button 

## How to Use

1. **Open the Application**: Open `index.html` in any modern web browser
2. **Welcome Screen**: The application starts with a welcome screen and the "Start Questions" button will be focused for screen readers
3. **Start the Application**: Press the "Start Questions" button to begin
4. **Navigate with Screen Reader**: The application will announce the first question automatically
5. **Press Next**: Use the "Next Question" button to advance through questions
6. **Keyboard Shortcuts**:
   - `Enter` or `Space` on the Start button to begin
   - `Enter` or `Space` on the Next button to advance
   - `Escape` key to return to welcome screen
   - `Enter` or `Space` on restart/return buttons when completed
7. **Completion Options**: After completing all questions, choose "Start Over" or "Return to Welcome"

## Modifying Questions

The questions are easily modifiable in the `script.js` file. Here are several ways to update them:

### Method 1: Direct Array Modification
Edit the `questions` array in `script.js`:

```javascript
const questions = [
    "Your new question 1?",
    "Your new question 2?",
    "Your new question 3?"
];
```

### Method 2: Using JavaScript Functions
The application provides helper functions for dynamic question management:

```javascript
// Add a single question
questionApp.addQuestion("What is your new question?");

// Remove a question by index (0-based)
questionApp.removeQuestion(2);

// Replace all questions
questionApp.updateQuestions([
    "New question 1?",
    "New question 2?",
    "New question 3?"
]);
```

### Method 3: Browser Console
You can modify questions directly in the browser console:

```javascript
// Add a question
questionApp.addQuestion("What inspires you most?");

// Get current question
console.log(questionApp.getCurrentQuestion());

// Get total count
console.log(questionApp.getTotalQuestions());
```

### Method 4: Using Question Sets
Load predefined question sets from the configuration file:

```javascript
// Load different question sets
questionSetUtils.loadQuestionSet('REFLECTION');
questionSetUtils.loadQuestionSet('INTERVIEW');
questionSetUtils.loadQuestionSet('EDUCATIONAL');
```

## File Structure

```
visual_aid/
├── index.html              # Main HTML file with welcome screen and semantic structure
├── styles.css              # CSS with accessibility and responsive design
├── script.js               # JavaScript with question management and screen reader support
├── questions-config.js     # Configuration file with multiple question sets
└── README.md               # This documentation file
```


## Testing with Screen Readers

### VoiceOver (macOS)
1. Enable VoiceOver (Cmd + F5)
2. Open the application in Safari
3. The start button will be focused automatically
4. Use VoiceOver navigation commands

### TalkBack (Android)
1. Enable TalkBack in Accessibility settings
2. Open the application in Chrome
3. The start button will be focused automatically
4. Use TalkBack gestures for navigation

## Customization

### Styling
Modify `styles.css` to change colors, fonts, and layout while maintaining accessibility.

### Welcome Screen
Customize the welcome screen content in `index.html`:
- Change the welcome message
- Modify the features list
- Update the description text

### Question Types
The application can be easily adapted for:
- Reflection prompts
- Assessment questions
- Interview questions
