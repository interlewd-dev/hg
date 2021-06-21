const initialState = {};

const player = (state, action) => {
  if (state === undefined)
    return initialState;

  switch (action.type) {
  case 'PLAYER/SET_PRONOUNS':
    return Object.assign({}, state, action.pronouns);
  default:
    return state;
  }
}
export default player;

