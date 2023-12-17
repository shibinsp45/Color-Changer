import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const handleColorChange = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };
  return (
    <div className="App" style={{ backgroundColor }}>
      <div>
        <h2>Random Color Generator</h2>
        <button onClick={handleColorChange}>Generate Random Color</button>
      </div>
    </div>
  );
}

export default App;
