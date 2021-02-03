import React,{useEffect} from 'react';
import {checkAuthentication, load_user} from '../actions/auth';
import {connect} from 'react-redux';
import CustomSider from '../components/CustomSider';

const Layout = ({isAuthenticated, checkAuthentication, load_user, children})=>{
  useEffect(function(){
    if(!isAuthenticated){
      checkAuthentication();
      load_user();
    }
  }, [])
  return (
    <div>
      <CustomSider/>
      {children}
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {isAuthenticated : state.auth.isAuthenticated};
}
export default connect(mapStateToProps, {checkAuthentication, load_user})(Layout);