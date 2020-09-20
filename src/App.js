import React, {useState} from 'react';
import './App.css';
import {questions} from "./content.js"
import {Question} from "./stories/Question.js"

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  let currentQuestion = questions[questionIndex];
  return (
    <div className="App">
      <Question incrementQuestion={() => setQuestionIndex(questionIndex + 1)} title={currentQuestion.title} type={currentQuestion.type} correct={currentQuestion.correct} choices={currentQuestion.choices} correctCaption={currentQuestion.correctCaption} incorrectCaption={currentQuestion.incorrectCaption}></Question>
    </div>
  );
}

export default App;
