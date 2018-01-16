// redux reducer can NOT return "undefined" !!!
export default (state, action) => {
  console.log(action);
  return null;
};
