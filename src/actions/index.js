import baseApi from '../apis/base';
import getCookie from '../apis/getCookie';

export const signinActionCreate =formValues=> async dispatch =>{
  const response = baseApi.post()
}

export const loginActionCreate = (formValues) => {
  return async dispatch =>{
  const token = getCookie("crsftoken");
  const response = await baseApi.post('/auth/login/', formValues,  {
    headers: {'X-CSRFToken' : token, "Content_type" : "application/json"}
  });
  
   dispatch({type : "LOGIN", payload : response});
}
}