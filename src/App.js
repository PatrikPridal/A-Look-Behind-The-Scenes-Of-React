import React, { useState, useCallback } from 'react';
// useCallback is a hook that allows us basically store a function across component executions

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNIN');

  // useCallback used with my fucntion as first argument
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  });

  return (
    <div className="app">
      <h1>Hi there!</h1> 
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
