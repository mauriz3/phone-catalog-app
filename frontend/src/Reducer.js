import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import reducers
import { signupReducer } from './components/signup/SignupReducer';
import { loginReducer } from './components/login/LoginReducer';
import { phonesReducer } from "./components/phones/PhonesReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer,
    phones: phonesReducer
  });

export default createRootReducer;
