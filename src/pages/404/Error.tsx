import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE } from 'utils/consts';
import './Error.scss';

const Error = () => {
  return (
    <div className="main__container">
      <div className="main__content">
        <h2 className="content__heading">Page Not Found</h2>
        <p className="content__error">404</p>
        <NavLink to={HOME_ROUTE} className="content__link">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
