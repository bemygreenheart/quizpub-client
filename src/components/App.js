import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from '../hocs/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ActivatePage from './pages/ActivatePage';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';

import 'antd/dist/antd.css';
import '../style/App.css';

class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={LandingPage}/>
              <Route path="/login/" component={LoginPage}/>
              <Route path="/password-reset/" component={ResetPassword}/>
              <Route path="/password/reset/confirm/:uid/:token/" component={ResetPasswordConfirm}/>
              <Route path="/activate/:uid/:token" component={ActivatePage}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;