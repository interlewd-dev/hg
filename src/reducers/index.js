import { combineReducers } from 'redux';
import player from './player';

const combinedReducers = combineReducers({
  // put imported reducers here
  player,
});

const rootReducer = (state, action) => {
  switch (action.type) {
  case 'CLEAR':
    return {};
  case 'CHEAT':
    return Object.assign({}, state, action.overrides);
  default:
    return combinedReducers(state, action);
  }
};
export default rootReducer;

