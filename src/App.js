import { useState } from 'react';
import './App.css';
import ImageGrid from './Components/ImageGrid';

function App() {
  const [blockCount, setBlockCount] = useState(3);
  return (
    <div className='main-container'>
      <h2>Memory Game</h2>
      <div className='block-container'>
        <ImageGrid n={blockCount} />
      </div>
    </div>
  );
}

export default App;
