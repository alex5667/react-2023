import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
