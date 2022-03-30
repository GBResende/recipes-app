import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Container>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Container>,
  document.getElementById('root'),
);

serviceWorker.unregister();
