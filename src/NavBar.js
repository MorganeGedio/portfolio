import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './images/logo_portfolio.png';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <div className="Brand">
            <Link to="/" className="Nav__brand">
              <img src={logo} alt="Logo Image" />
            </Link>
          </div>

          <div className="Links">
            <div className="Nav_left">
              <ul className="Nav__item-wrapper">
                {/* <li className="item">
                  <NavLink to="/" activeClassName="active">Home</NavLink>
                </li> */}
                <li className="item">
                  <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
              </ul>
            </div>
            <div className="Nav_right">
              <ul className="item-wrapper">
                <li className="item">
                  <a href="https://www.linkedin.com/in/morganegedio/" target="_blank"> <i class="fab fa-linkedin-in"></i> </a>
                </li>
                <li className="item">
                  <a href="https://github.com/MorganeGedio" target="_blank"> <i class="fab fa-github"></i> </a>
                </li>
                <li className="item">
                  <a href="mailto:morgane.gedio@gmail.com"> <i class="fas fa-at"></i> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
