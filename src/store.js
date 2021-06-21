import { createStore } from 'redux';
import rootReducer from './reducers';
import middlewares from './middlewares';

const initialState = {};

export default createStore(rootReducer, initialState, middlewares);

