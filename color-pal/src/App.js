import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import './App.css';
import generatePalettes from './colorHelpers'

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalettes(seedColors[7])} />
    </div>
  );
}

export default App;
