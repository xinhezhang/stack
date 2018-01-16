// redux reducer can NOT return "undefined" !!!
export default (state = null, action) => {
  //console.log(action);
  switch (action.type) {
    case 'SELECT_LIBRARY':
      return action.payload;  // libraryId
    default:
      return state;
  }
};
