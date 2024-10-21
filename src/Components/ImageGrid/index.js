import React, { useState } from 'react';

const ImageGrid = ({ n }) => {
  // Create a 2D array to manage the state of each cell
  const [grid, setGrid] = useState(
    Array.from({ length: n }, () => Array(n).fill(null))
  );

  // Function to handle the click event
  const handleClick = (row, col) => {
    // Create a new grid with the clicked cell updated to show an image
    const newGrid = grid.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) =>
        rowIndex === row && colIndex === col
          ? 'https://via.placeholder.com/100' // Replace with your image URL
          : cell
      )
    );
    setGrid(newGrid);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${n}, 100px)`, // Adjust the size as needed
        gridTemplateRows: `repeat(${n}, 100px)`, // Adjust the size as needed
        gap: '5px',
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleClick(rowIndex, colIndex)}
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: cell ? `url(${cell}) center/cover no-repeat` : 'white',
            }}
          >
            {!cell && 'Click'}
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGrid;
