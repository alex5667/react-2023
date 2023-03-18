import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import NotFound from 'pages/NotFound/NotFound';
import { ABOUT_ROUTE, NOTFOUND_ROUTE, HOME_ROUTE } from 'utils/consts';
import Layout from 'components/Layout/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_ROUTE} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
    </Route>
  )
);
