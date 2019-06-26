import React from 'react';
import './App.css';
import RouletteGun from './statedrills/RouletteGun';

function App() {
  return (
    <div className="App">
      <RouletteGun bulletInChamber={8} />
    </div>
  );
}

export default App;
