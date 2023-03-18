import ButtonLink from 'components/UI/button/ButtonLink';
import React from 'react';
import { HOME_ROUTE } from 'utils/consts';
import './NotFound.scss';

const Error = () => {
  return (
    <div className="main__container">
      <div className="main__content-not-found">
        <h2 className="content__heading-not-found">Page Not Found</h2>
        <p className="content__error-not-found">404</p>
        <ButtonLink to={HOME_ROUTE}>Back to Home</ButtonLink>
      </div>
    </div>
  );
};

export default Error;
