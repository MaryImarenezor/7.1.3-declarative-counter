import './App.css';
import React, { useState } from 'react'

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
