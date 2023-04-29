import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomeHook from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import FormHookPage from 'pages/FormPage';
import { ABOUT_ROUTE, NOTFOUND_ROUTE, HOME_ROUTE, FORM_ROUTE } from 'utils/consts';
import Layout from 'components/Layout';

const routes = (
  <Routes>
    <Route path={HOME_ROUTE} element={<Layout />}>
      <Route index element={<HomeHook />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={FORM_ROUTE} element={<FormHookPage />} />
      <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
    </Route>
  </Routes>
);

export default routes;
