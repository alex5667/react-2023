import React, { Component } from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/routes';

export class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
