import React from 'react';
import { Modal, Button } from 'antd';
import {FacebookFilled, GoogleOutlined, GithubOutlined} from '@ant-design/icons';
import LoginForm from '../utils/LoginForm';
import SigninForm from '../utils/SigninForm';
import '../../style/LoginPage.css';

const LoginPage = ()=>{

  const [isLoginForm, setLoginForm] = React.useState(true);

  
  return(
    <div className="login-page">
      <div className="form-wrapper">
        <h6 className="form-header">{isLoginForm? "Account Login" : "Create Account"}</h6>
        <div className="signin-or-login">
          <div className={isLoginForm? "login-active" : ""} onClick={()=>setLoginForm(true)} >Log In</div>
          <div className={isLoginForm? "" : "login-active"} onClick={()=>setLoginForm(false)}>Sign In</div>
        </div>
      {isLoginForm ? <LoginForm/> : <SigninForm/>}
      <div className="social-media-login">
        <div><GithubOutlined/></div>
        <div><GoogleOutlined/></div>
        <div><FacebookFilled/></div>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;