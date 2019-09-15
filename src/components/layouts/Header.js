/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Header extends Component {
  render() {
    return (
      <div className="container">
        <div id="navigation" className="Navigation">
          <nav
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              color: '#000000'
            }}>
            <ul>
              <Link to="/">
                <li style={{ marginTop: '25px' }}>Home</li>
              </Link>
              <Link to="/horror">
                <li style={{ marginTop: '25px' }}>Horror</li>
              </Link>
              <Link to="/topPick">
                <li style={{ marginTop: '25px' }}>Top picks</li>
              </Link>
              <Link to="/">
                <li style={{ marginTop: '25px' }}>Recent</li>
              </Link>
              <li style={{ background: 'transparent' }}>
                <form
                  onSubmit={this.props.onSubmit}
                  id="search"
                  className="Search">
                  <input type="search" placeholder="Search for a title..." />
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
