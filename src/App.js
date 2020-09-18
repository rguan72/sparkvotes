import React from 'react';
import './App.css';
import {questions} from "./content.js"
import {Question} from "./stories/Question.js"

function App() {
  let currentQuestion = questions[0];
  return (
    <div className="App">
      <Question title={currentQuestion.title} type={currentQuestion.type} choices={currentQuestion.choices} correctCaption={currentQuestion.correctCaption} incorrectCaption={currentQuestion.incorrectCaption}></Question>
    </div>
  );
}

export default App;
