import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/scss/App.scss';
import { BrowserRouter } from "react-router-dom";
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
