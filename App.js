import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [colors, setColors] = useState(Array(9).fill(''));
  const [originalClicks, setOriginalClicks] = useState([]);

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = 'green';
    setColors(newColors);

    setOriginalClicks([...originalClicks, index]);

    if (originalClicks.length === 8) {
      const orangeColors = originalClicks.map((clickIndex) => 'orange');
      setColors(orangeColors);
    }
  };

  const renderBoxes = () => {
    return colors.map((color, index) => (
      <div
        key={index}
        className="box"
        style={{ backgroundColor: color }}
        onClick={() => handleClick(index)}
      />
    ));
  };

  return (
    <div className="App">
      <h1>Color Matrix</h1>
      <div className="matrix">{renderBoxes()}</div>
    </div>
  );
};

export default App;
