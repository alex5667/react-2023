import express from 'express';
import path from 'path';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../components/App/App';
import { StaticRouter, StaticRouterProps } from 'react-router-dom/server';

interface ExtendedStaticRouterProps extends StaticRouterProps {
  context?: StaticRouterProps;
  location: string;
}

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', (req, res) => {
  const context: ExtendedStaticRouterProps = { location: req.url };
  const stream = renderToPipeableStream(
    <StaticRouter {...context}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: ['client.bundle.js'],
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        stream.pipe(res);
      },
    }
  );
});

app.listen(3000, () => console.log('Express server is running on localhost:3000'));
