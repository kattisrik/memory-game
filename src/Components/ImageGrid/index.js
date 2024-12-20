import React, { useEffect, useState } from 'react';

const ImageGrid = ({ n, actualGrid }) => {
  // Create a 2D array to manage the state of each cell
  const [grid, setGrid] = useState(Array(n*n).fill(null));
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [last2Index, setLast2Index] = useState([]);
  // Function to handle the click event
  const handleClick = (index) => {
    if(numberOfClicks === 2) return    
    const tempGrid = [...grid]
    const tempLast2Index = [...last2Index]
    tempLast2Index.push(index)
    tempGrid[index] = actualGrid[index]
    setGrid(tempGrid)
    setLast2Index(tempLast2Index)
    setNumberOfClicks((prev) => prev+1)
  };
  useEffect(() => {
    // Reset the grid whenever 'n' changes
    setGrid(Array(n * n).fill(null));
    setNumberOfClicks(0);
    setLast2Index([]);
    // eslint-disable-next-line
  }, [n]);
  useEffect(() => {
    if(numberOfClicks === 2) {
      setTimeout(()=>{
        if(actualGrid[last2Index[0]] === actualGrid[last2Index[1]]) {
          setNumberOfClicks(0)
          setLast2Index([])
        } else {
          const tempGrid = [...grid]
          tempGrid[last2Index[0]] = null
          tempGrid[last2Index[1]] = null
          setGrid(tempGrid)
          setNumberOfClicks(0)
          setLast2Index([])
        }
      }, 1000)
    }
    // eslint-disable-next-line
  }, [numberOfClicks])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${n}, 10vw)`,
        gridTemplateRows: `repeat(${n}, 10vw)`,
        gap: '12px',
      }}
    >
      {grid.map((cell, rowIndex) =>
          <div
            key={`${rowIndex}`}
            onClick={() => handleClick(rowIndex)}
            style={{
              cursor: 'pointer',
              width: '10vw',
              height: '10vw',
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
