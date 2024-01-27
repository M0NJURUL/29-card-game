import React from 'react';

const styles = {
  bottom: {
    position: 'absolute',
    left: '50%',
    bottom: '30%',
    transform: 'translateX(-150%)',
  },
  up: {
    position: 'absolute',
    left: '50%',
    top: '10%',
    transform: 'translateX(-150%)',
  },
  left: {
    position: 'absolute',
    left: '20%',
    top: '50%',
    transform: 'translateY(-150%)',
  },
  right: {
    position: 'absolute',
    right: '20%',
    top: '50%',
    transform: 'translateY(-150%)',
  },
};

const PlayerBox = ({ children, boxPosition = 'bottom' }) => {
  return <div style={styles[boxPosition]}>{children}</div>;
};

export default PlayerBox;
