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
      <div className='block-container'>
        <ImageGrid n={blockCount} actualGrid={actualGrid} />
      </div>
    </div>
  );
}

export default App;
