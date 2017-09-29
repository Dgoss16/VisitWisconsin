import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Dining from '../src/Components/Dining/Dining';
import Outdoors from '../src/Components/Outdoors/Outdoors';
import Explore from '../src/Components/Explore/Explore';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter>
            <Switch>
              <Route exact path='/' component={ Home }/>
              <Route path='/dining' component={ Dining }/>
              <Route path='/outdoors' component={ Outdoors }/>
              <Route path='/explore' component={ Explore }/>
            </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
