import React, { useState } from 'react';
import './Quiz.css';
import yay1 from './images/yay1.png';
import yay2 from './images/yay2.png';
import fire from './images/fire.png'; // Fire image import

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFire, setShowFire] = useState(false); // State to control fire icon visibility
  const [quizComplete, setQuizComplete] = useState(false); // State for quiz completion

  const questions = [
    {
      question: "How many schools have I changed?",
      options: [2, 5, 4, 7],
      correctAnswer: 7,
    },
    {
      question: "Do I like Dev more or DSA more?",
      options: ["Dev", "DSA", "Both", "Neither"],
      correctAnswer: "Dev",
    },
    {
        question: " What do I prefer?",
        options: ["Java", "C++", "Python", "Neither"],
        correctAnswer: "Java",
      },
    
  ];

  // Handle answer click
  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questions[questionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setShowFire(true); // Show fire on correct answer
      setTimeout(() => {
        setShowFire(false); // Hide fire after a brief period
        // Move to the next question
        if (questionIndex < questions.length - 1) {
          setQuestionIndex(questionIndex + 1);
        } else {
          setQuizComplete(true); // If it's the last question, show the Thank You message
        }
      }, 1000); // Fire will stay visible for 1 second
    } else {
      alert("Oops! Try again.");
    }
  };

  return (
    <div className='bod'>
      <div className="quiz">
        <div className="quiz-header">
          <img src={yay1} alt="Yay icon" className="quiz-icon" />
          <h2 className="quiz-title">Little Quiz</h2>
          <img src={yay2} alt="Yay icon" className="quiz-icon" />
        </div>

        <div className="question-container">
          {!quizComplete ? (
            <>
              <h3 className="question-text">{questions[questionIndex].question}</h3>

              <div className="options-container">
                {questions[questionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleAnswerClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <h3 className="thank-you-message">Thank you for completing the quiz! Your score is {score} out of {questions.length}</h3>
          )}
        </div>

        {showFire && (
          <div className="fire-container">
            <img src={fire} alt="Fire icon" className="fire-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
