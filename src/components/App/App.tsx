import React, { FC } from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/routes';

const App: FC = () => {
  return (
    <>
      {typeof document !== 'undefined' && (
        <RouterProvider data-testid="router-provider" router={router} />
      )}
    </>
  );
};

export default App;
