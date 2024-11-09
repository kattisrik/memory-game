import React, { useState } from 'react';

const ImageGrid = ({ n, actualGrid }) => {
  // Create a 2D array to manage the state of each cell
  const [grid, setGrid] = useState(Array(n*n).fill(null));

  // Function to handle the click event
  const handleClick = (index) => {
    // Create a new grid with the clicked cell updated to show an image
    const tempGrid = [...grid]
    tempGrid[index] = actualGrid[index]
    setGrid(tempGrid)
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${n}, 150px)`,
        gridTemplateRows: `repeat(${n}, 150px)`,
        gap: '12px',
      }}
    >
      {grid.map((cell, rowIndex) =>
          <div
            key={`${rowIndex}`}
            onClick={() => handleClick(rowIndex)}
            style={{
              width: '150px',
              height: '150px',
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: cell ? `url(${cell}) center/cover no-repeat` : 'white',
            }}
          >
            {!cell && 'Click'}
          </div>
      )}
    </div>
  );
};

export default ImageGrid;
