import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as content from './content.json';

function App() {
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
