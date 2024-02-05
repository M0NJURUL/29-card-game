import React from "react";
import PlayerProfile from "./components/PlayerProfile";
import "./App.css";
import PlayerBox from "./components/PlayerBox";

import Points from "./components/point section/Points";
import OwnPointSection from "./components/point section/OwnPointSection";
import OppositePointSection from "./components/point section/OppositePointSection";


function App() {
  return (
    <div className="main">
      <Points>
        <OwnPointSection />
        <OppositePointSection />
      </Points>
      <div className="players-wrapper">
        <PlayerBox>
          <PlayerProfile />
        </PlayerBox>
      </div>
    </div>
  );
}

export default App;
