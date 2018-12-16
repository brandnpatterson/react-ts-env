import * as React from 'react';
import Hello from './components/Hello';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Hello compiler="TypeScript" framework="React" />
      <img src="patterson-family.jpg" alt="Patterson Family" />
    </div>
  );
};

export default App;
