import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

// const rootElement = document.getElementById('root') as HTMLElement;
// ReactDOM.createRoot(rootElement).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.hydrateRoot(
  rootElement,
  <Provider store={store}>
    <App />
  </Provider>
);
