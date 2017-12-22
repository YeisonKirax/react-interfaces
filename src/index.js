//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//Rutas
import AppRoutes from './routes';


import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
