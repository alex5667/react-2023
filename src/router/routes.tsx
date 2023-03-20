import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Form from 'pages/FormPage';
import { ABOUT_ROUTE, NOTFOUND_ROUTE, HOME_ROUTE, FORM_ROUTE } from 'utils/consts';
import Layout from 'components/Layout/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_ROUTE} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={FORM_ROUTE} element={<Form />} />
      <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
    </Route>
  )
);
