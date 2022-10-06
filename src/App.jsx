import './App.css';
import React from 'react';
import { monitor, clearMonitor } from './util/monitor';

function App() {
  React.useEffect(() => {
    monitor();
    return () => {
      clearMonitor();
    };
  }, []);

  return (
    <div className='App'>
      <div className='outer' id='outer'>
        <div className='middle' id='middle'>
          <div className='inner' id='inner'>
            <p>Hello World</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
