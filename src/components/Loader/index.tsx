import React from 'react';
import cl from './Loader.module.scss';
const Loader = () => {
  return (
    <div data-testid="loader-wrapper" className={cl.wrapper}>
      <div data-testid="loader" className={cl.loader}>
        <div data-testid="loading-spinner" className={cl.loaderInternal}></div>
      </div>
    </div>
  );
};

export default Loader;
