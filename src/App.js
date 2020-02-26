import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import logo from './images/logo_portfolio.png';
import './App.css';

function App() {
  return (
     <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <div className="navigation">
          <img src={logo}className="logo" alt="Logo Image" />
          <div className="navigation-sub">

            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>

          </div>
        </div>
      </div>
      </BrowserRouter>
    );
}

export default App;
