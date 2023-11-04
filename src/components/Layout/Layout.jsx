import AuthNav from 'components/AuthNav/AuthNav';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <AuthNav />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
