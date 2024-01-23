import React from 'react';
import PlayerProfile from './components/PlayerProfile';
import './App.css';
import PlayerBox from './components/PlayerBox';

function App() {
  return (
    <div className="main">
      <div className="players-wrapper">
        <PlayerBox>
          <PlayerProfile />
        </PlayerBox>
      </div>
    </div>
  );
}

export default App;
