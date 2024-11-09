import { useState } from 'react';
import './App.css';
import ImageGrid from './Components/ImageGrid';
import { emojiUrls } from './utils/constants';
import { getNValuesWithDuplicates } from './utils/helper';

function App() {
  const [blockCount, setBlockCount] = useState(4);
  const actualGrid = getNValuesWithDuplicates(emojiUrls, blockCount*blockCount)
  return (
    <div className='main-container'>
      <h2>Memory Game</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '20px'}}>
        <p style={{margin: 'unset'}}>Select Size</p>
        <select value={blockCount} onChange={(e) => setBlockCount(e.target.value)}>
          <option value={4}>4 X 4</option>
          <option value={6}>6 X 6</option>
          <option value={8}>8 X 8</option>
          <option value={10}>10 X 10</option>
        </select>
      </div>
      <div className='block-container'>
        <ImageGrid n={blockCount} actualGrid={actualGrid} />
      </div>
    </div>
  );
}

export default App;
