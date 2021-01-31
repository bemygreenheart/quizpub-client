import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const loginReducer = (state = null, action)=>{
  if (action.type === "LOGIN"){
    console.log(action.payload);
  }
  return state
}




const reducers = combineReducers({
  form: formReducer
});

export default reducers;
