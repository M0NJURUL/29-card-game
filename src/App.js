import React from 'react';
import PlayerProfile from './components/PlayerProfile';
import './App.css';
import PlayerBox from './components/PlayerBox';

import OwnPointSection from './components/OwnPointSection';
import OppositePointSection from './components/OppositePointSection';

function App() {
  return (
    <div className="main">
      <div className="players-wrapper">
        <PlayerBox>

          <OwnPointSection />
          <OppositePointSection />

          <PlayerProfile />
        </PlayerBox>
      </div>
    </div>
  );
}

export default App;
