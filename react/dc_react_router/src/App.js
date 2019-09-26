import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
        <ul>
          <li><NavLink to="/1">1</NavLink></li>
          <li><NavLink to="/2">2</NavLink></li>
          <li><NavLink to="/3">3</NavLink></li>
        </ul>
      </header>


      <Switch>
        <Route path="/2">
          <Content num={2} />
        </Route>
        <Route path="/3">
          <Content num={3} />
        </Route>
        <Route path="/">
          <Content num={1} />
        </Route>
      </Switch>


      <footer>Bye!</footer>
    </div>
  );
}

export default App;
