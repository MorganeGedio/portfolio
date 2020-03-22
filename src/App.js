import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import NotFound from './components/NotFound.js';
import NavBar from './components/NavBar.js';
import './css/App.css';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              <NavBar />
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} /> 
                <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
                <Route component={NotFound} />
              </Switch>
              </div>
            </BrowserRouter>
          </div>
        );
    }
}

export default App;
