import React, { useState, useEffect } from 'react';

const Boxes = () => {
  const [boxColors, setBoxColors] = useState(Array(60).fill('white')); // Initial white boxes
  const [activeBoxIndex, setActiveBoxIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoxColors((prevColors) => {
        const newColors = [...prevColors];
        if (activeBoxIndex < 60) {
          newColors[activeBoxIndex] = getRandomColor();
        } else if (activeBoxIndex === 60) {
          return Array(60).fill('black'); 
        } else {
          return Array(60).fill('white'); 
        }
        return newColors;
      });

      setActiveBoxIndex((prevIndex) =>
        prevIndex === 61 ? 0 : prevIndex + 1
      ); 

    }, 2000); 

    return () => clearInterval(interval); 
  }, [activeBoxIndex]);

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="grid grid-cols-10 gap-2">
      {boxColors.map((color, index) => (
        <div
          key={index}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

export default Boxes;
