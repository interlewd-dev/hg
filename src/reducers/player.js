const player = (state, action) => {
  switch (action.type) {
  case 'PLAYER/SET_PRONOUNS':
    return Object.assign({}, state, action.pronouns);
  default:
    return state;
  }
}
export default player;

