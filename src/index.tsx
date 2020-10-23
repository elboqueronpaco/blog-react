import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Route,  Switch, BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import HomePage from './pages'
import AboutPage from './pages/about'
import BlogsPage from './pages/blogs'
import NewUserPage from './pages/users/newUser'
import LoginPage from './pages/auth/login'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/about' component={AboutPage} />
        <Route path='/blogs' component={BlogsPage} />
        <Route path='/signup' component={NewUserPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
