import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import NotFound from './NotFound.js';
import logo from './images/logo_portfolio.png';
import './App.css';

function App() {
  return (
     <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />

        <div className="navigation">
          <img src={logo}className="logo" alt="Logo Image" />
          <div className="navigation-sub">

            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>

            <a href="https://www.linkedin.com/in/morganegedio/" target="_blank"> <i class="fab fa-linkedin-in"></i> </a>
            <a href="https://github.com/MorganeGedio" target="_blank"> <i class="fab fa-github"></i> </a>
            <a href="mailto:morgane.gedio@gmail.com"> <i class="fas fa-at"></i> </a>

          </div>
        </div>
      </div>
      </BrowserRouter>
    );
}

export default App;
