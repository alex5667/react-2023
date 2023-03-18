import ButtonLink from 'components/UI/button/ButtonLink';
import React from 'react';
import { HOME_ROUTE } from 'utils/consts';
import './NotFound.scss';

const Error = () => {
  return (
    <div className="main__container">
      <div className="main__content">
        <h2 className="content__heading">Page Not Found</h2>
        <p className="content__error">404</p>
        <ButtonLink to={HOME_ROUTE}>Back to Home</ButtonLink>
      </div>
    </div>
  );
};

export default Error;
