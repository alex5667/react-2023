import React, { FC, Suspense } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Loader from 'components/Loader';
import routes from 'router/routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{routes}</Suspense>
    </BrowserRouter>
  );
};

export default App;
