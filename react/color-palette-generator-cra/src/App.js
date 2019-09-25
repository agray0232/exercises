import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './ColorControls';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Controls />
        </header>
        <body>
        </body>
      </div>
    )
  }
}

export default App;
