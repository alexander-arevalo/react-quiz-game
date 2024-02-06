import React, { useRef } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTION from "../questions";

const Summary = ({ userAnswer }) => {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className="user-answer">{answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
