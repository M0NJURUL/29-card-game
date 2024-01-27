import React from 'react';
import PlayerProfile from './components/PlayerProfile';
import './App.css';
import PlayerBox from './components/PlayerBox';

// import SingleCard from './components/Card';

import TestCard from './components/Card';

function App() {
  const type = 'hearts';
  const value = 5;

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
