import React from 'react';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE, HOME_ROUTE } from 'utils/consts';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div data-testid="router-provider" className="header__container">
      <div className="header__logo">
        <h1 className="logo__h1">Online-store</h1>
      </div>
      <div className="header__menu menu">
        <button type="button" className="menu__icon icon-menu">
          <span></span>
        </button>
        <nav className="menu__body">
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink
                to={HOME_ROUTE}
                className={({ isActive }) => 'menu__link' + (isActive ? '-active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                to={ABOUT_ROUTE}
                className={({ isActive }) => 'menu__link' + (isActive ? '-active' : '')}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
