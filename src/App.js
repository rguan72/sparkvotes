import React, {useState} from 'react';
import './App.css';
import {questions} from "./content.js"
import {Question} from "./stories/Question.js"
import { CelebrationPage } from "./stories/Celebration.js"
import { LandingPage } from "./stories/LandingPage.js"

function App() {
  const [questionIndex, setQuestionIndex] = useState(-1);
  let currentQuestion = questions[questionIndex];
  if(questionIndex === -1) {
    return <LandingPage next={() => setQuestionIndex(questionIndex + 1)} />
  }
  else if (questionIndex >= questions.length) {
    return <CelebrationPage />
  }
  else {
    return (
        <Question incrementQuestion={() => (setQuestionIndex(questionIndex + 1))} title={currentQuestion.title} type={currentQuestion.type} correct={currentQuestion.correct} choices={currentQuestion.choices} correctCaption={currentQuestion.correctCaption} incorrectCaption={currentQuestion.incorrectCaption}></Question>
    );
  }
}

export default App;
