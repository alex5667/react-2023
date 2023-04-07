import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/routes';

const App = () => {
  return (
    <>
      <RouterProvider data-testid="router-provider" router={router} />
    </>
  );
};

export default App;
