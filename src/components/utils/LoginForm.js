import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import {login} from '../../actions/auth';

class LoginForm extends React.Component{

  customInput({input, type, placeholder}){
    return (
      <div className="input-wrapper">
        <input className="custom-input" type={type} {...input} placeholder={placeholder} required/>
      </div>
    );
  }

  onFormSubmit = (formValues)=>{
    this.props.login(formValues.email, formValues.password);
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name="email" type="email" placeholder="Email" component={this.customInput} />
        <Field name="password" type="password" placeholder="Password" component={this.customInput}/>
        <div className="buttons-flex">
          <div><button type="cancel" className="login-button">Cancel</button></div>
          <div><button type="submit" className="login-button">Submit</button></div>
        </div>
      </form>
    );
  }
}

const CustomLoginForm = connect(null, {login})(LoginForm);

export default reduxForm({
  form : "loginForm"
})(CustomLoginForm);