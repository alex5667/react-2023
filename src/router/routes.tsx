import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Error from 'pages/404/Error';
import { ABOUT_ROUTE, ERROR_ROUTE, HOME_ROUTE } from 'utils/consts';
import Layout from 'components/Layout/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_ROUTE} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={ERROR_ROUTE} element={<Error />} />
    </Route>
  )
);
