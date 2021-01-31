import React from 'react';
import {Field, reduxForm} from 'redux-form';

class SigninForm extends React.Component{
  
  customInput({input, type, placeholder}){
    return (
      <div className="input-wrapper">
        <input className="custom-input" type={type} {...input} placeholder={placeholder}/>
      </div>
    );
  }

  onFormSubmit = (formValues)=>{
    console.log(formValues);
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name="username" type="text" placeholder="Username" component={this.customInput} />
        <Field name="email" type="email" placeholder="Email" component={this.customInput} />
        <Field name="password" type="password" placeholder="Password" component={this.customInput} />
        <Field name="password_conf" type="password" placeholder="Password confirm" component={this.customInput}/>
        <div className="buttons-flex">
          <div><button type="cancel" className="login-button">Cancel</button></div>
          <div><button type="submit" className="login-button">Submit</button></div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form : "signinForm"
})(SigninForm);