import React from 'react'
import '../styles/Header.css'
import BurgerIcon from '../assets/burger-icon.png'


class Header extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="menu-button">
          <img id="burger-icon" src={BurgerIcon} alt="Burger icon"/>
        </div>
        <ul id="menu-list">
          <li>Dashboard</li>
          <li>Our Agency</li>
          <li className="selected">Our Staff</li>
          <li>Locations</li>
          <li>Latest</li>
          <li>Upcoming</li>
          <li>Resources</li>
          <li>Your Stein IAS</li>
        </ul>
      </div>
    )
  }
}

export default Header
