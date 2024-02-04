import React from 'react';
import PlayerProfile from './components/PlayerProfile';
import PlayerBox from './components/PlayerBox';
import './App.css';
import OwnPointSection from './components/OwnPointSection';
import OppositePointSection from './components/OppositePointSection';

function App() {
  return (
    <div className="main">
      <div>
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
