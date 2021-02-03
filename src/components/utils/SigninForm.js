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
        <Field name="email" type="email" placeholder="Email" component={this.customInput} />
        <Field name="name" type="text" placeholder="Name" component={this.customInput} />
        <Field name="password" type="password" placeholder="Password" component={this.customInput} />
        <Field name="re_password" type="password" placeholder="Password confirm" component={this.customInput}/>
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