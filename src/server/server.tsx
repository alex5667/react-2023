import express from 'express';
import path from 'path';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter, StaticRouterProps } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import routes from 'router/routes';
import { Writable } from 'stream';

interface ExtendedStaticRouterProps extends StaticRouterProps {
  context?: StaticRouterProps;
  location: string;
}

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', async (req, res) => {
  const context: ExtendedStaticRouterProps = { location: req.url };
  try {
    const stream = await renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter {...context}>{routes}</StaticRouter>
      </Provider>
    );
    res.write(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Web site created using create-react-app">
      <link rel="stylesheet" href="style.css">
      <title>Online store</title>
    </head>
    <body>
      <div id="root">`);

    const writable = new Writable({
      write(chunk, encoding, callback) {
        res.write(chunk, encoding);
        callback();
      },
      final(callback) {
        res.write(`</div><script src="client.js"></script></body></html>`);
        res.end();
        callback();
      },
    });

    stream.pipe(writable);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => console.log('Express server is running on localhost:3000'));
