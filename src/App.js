import React from 'react';
import PlayerProfile from './components/PlayerProfile';
import './App.css';
import PlayerBox from './components/PlayerBox';

import TestCard from './components/card design/Card';


function App() {

  const type = "hearts";
  const value = 5;

  return (
    <div className="main">
      <div className="players-wrapper">
        <PlayerBox>
          <PlayerProfile />
        </PlayerBox>
      </div>

      {/* create required components for a single card */}
      <div>
        <TestCard value="h1"/>
        {/* <Card value={value} type={type}/> */}
      </div>

    </div>
  );
}

export default App;
