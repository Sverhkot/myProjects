import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Frog from './Frog';
import frogs from './frogs.js';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import {createBrowserHistory} from 'history';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/frog">
            <Frog />
          </Route>
          <Route path="/">
            <Main />
          </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
