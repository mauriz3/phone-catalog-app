import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import reducers
import { signupReducer } from './components/signup/SignupReducer';
import { loginReducer } from './components/login/LoginReducer'; 

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer
  });

export default createRootReducer;
