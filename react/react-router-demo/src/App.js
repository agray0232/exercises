import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Setup from './demos/Setup.js';
import Links from './demos/Links.js';
import Routes from './demos/Routes.js';
import Switches from './demos/Switches.js';
import WithRouter from './demos/WithRouter.js';


class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', textAlign: 'center'}}>
        <div>
          <NavLink to="/setup" style={{ margin: '2em' }}>0 - Setup </NavLink>
          <NavLink to="/links" style={{margin: '2em'}}>1 - Links </NavLink>
          <NavLink to="/routes" style={{margin: '2em'}}>2 - Routes</NavLink>
          <NavLink to="/switches" style={{margin: '2em'}}>3 - Switches</NavLink>
          <NavLink to="/withrouter" style={{ margin: '2em' }}>4 - withRouter()</NavLink>
          <hr />
          <Switch>
            <Route path="/setup" component={Setup} />
            <Route path="/links" component={Links}/>
            <Route path="/routes" component={Routes} />
            <Route path="/switches" component={Switches} />
            <Route path="/withrouter" component={WithRouter} />
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default App;
