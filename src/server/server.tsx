import express from 'express';
import path from 'path';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter, StaticRouterProps } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import routes from 'router/routes';

interface ExtendedStaticRouterProps extends StaticRouterProps {
  context?: StaticRouterProps;
  location: string;
}

const app = express();

app.use(express.static(path.resolve(__dirname, '../../build')));

app.get('/*', async (req, res) => {
  const context: ExtendedStaticRouterProps = { location: req.url };
  try {
    const stream = renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter {...context}>{routes}</StaticRouter>
      </Provider>,
      { bootstrapScripts: ['client.bundle.js'] }
    );
    res.write(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Web site created using create-react-app">
      <title>Online store</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div id="root">`);
    stream.pipe(res).on('end', () => {
      res.write(`</div>
        <script src="client.bundle.js"></script> </body>
        </html>`);
      res.end();
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => console.log('Express server is running on localhost:3000'));
