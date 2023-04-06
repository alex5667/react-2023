import React from 'react';
import cl from './Loader.module.scss';
const Loader = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.loader}>
        <div className={cl.loaderInternal}></div>
      </div>
    </div>
  );
};

export default Loader;
