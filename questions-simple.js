// Load questions from configuration file
const questions = window.QuestionSets.DEFAULT;
let currentQuestionIndex = 0;

// DOM elements
const questionDisplay = document.getElementById('current-question');
const nextButton = document.getElementById('next-button');
const currentNumber = document.getElementById('current-number');
const totalQuestions = document.getElementById('total-questions');
const progressText = document.getElementById('progress-text');

// Initialize the application
function initializeApp() {
    totalQuestions.textContent = questions.length;
    displayQuestion(0);
    nextButton.addEventListener('click', nextQuestion);
    setupKeyboardNavigation();
    announceToScreenReader("Question application started. The first question will be read aloud.");
}

// Display a question
function displayQuestion(index) {
    const question = questions[index];
    questionDisplay.textContent = question;
    currentNumber.textContent = index + 1;
    progressText.textContent = `Question ${index + 1} of ${questions.length}`;
    announceToScreenReader(`Question ${index + 1}: ${question}`);
    setTimeout(() => nextButton.focus(), 100);
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        window.location.href = 'completion.html';
    }
}

// Announce to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => {
        if (announcement.parentNode) {
            announcement.parentNode.removeChild(announcement);
        }
    }, 1000);
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (event) => {
        if ((event.key === ' ' || event.key === 'Enter') && 
            document.activeElement === nextButton) {
            event.preventDefault();
            nextQuestion();
        }
        if (event.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeApp);
