import React from 'react';
import PlayerProfile from './components/PlayerProfile';
import PlayerBox from './components/PlayerBox';
import './App.css';
import { rank } from './utils/data';

function App() {
  console.log(rank);
  return (
    <div className="main">
      <div>
        <PlayerBox>
          <PlayerProfile />
        </PlayerBox>
      </div>
    </div>
  );
}

export default App;
