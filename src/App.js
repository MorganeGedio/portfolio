import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import NotFound from './NotFound.js';
import NavBar from './NavBar.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
              </div>
            </BrowserRouter>
          </div>
        );
    }
}

export default App;
