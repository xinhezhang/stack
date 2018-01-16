import { combineReducers } from 'redux';

import LibraryReducer from './LibraryReducer';

// global application state
export default combineReducers({
  libraries: LibraryReducer,
});

// console.log(store.getState());
// -> { libraries: [] }
