import * as React from 'react';
import Hello from './components/Hello';

const App = () => {
  return (
    <div>
      <Hello compiler="TypeScript" framework="React" />
      <img src="patterson-family.jpg" alt="Patterson Family" />
    </div>
  );
};

export default App;
