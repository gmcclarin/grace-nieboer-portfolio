import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Helmet } from "react-helmet"
import nightwind from "nightwind/helper"
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Helmet>
      <script>{nightwind.init()}</script>
    </Helmet>
    <App />
  </BrowserRouter>
);
