import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>} 
      <Button>Show Paragraph</Button>
    </div>
  );
}

export default App;
