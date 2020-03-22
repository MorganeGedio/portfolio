import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import NotFound from './components/NotFound.js';
import NavBar from './components/NavBar.js';
import './css/App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              <NavBar />
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} /> 
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
