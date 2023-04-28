import React, { FC, lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader';

const HomeHook = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const NotFound = lazy(() => import('pages/NotFound'));
const FormHookPage = lazy(() => import('pages/FormPage'));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ABOUT_ROUTE, NOTFOUND_ROUTE, HOME_ROUTE, FORM_ROUTE } = require('utils/consts');
const Layout = lazy(() => import('components/Layout'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME_ROUTE} element={<Layout />}>
            <Route index element={<HomeHook />} />
            <Route path={ABOUT_ROUTE} element={<About />} />
            <Route path={FORM_ROUTE} element={<FormHookPage />} />
            <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
