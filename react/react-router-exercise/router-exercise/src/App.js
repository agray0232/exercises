import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import Feed from './Feed.js';
import Faq from './Faq.js';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route path="/feed">
          <Feed></Feed>
        </Route>
        <Route path="/faq">
          <Faq></Faq>
        </Route>
        <Route path="/">

        </Route>
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
