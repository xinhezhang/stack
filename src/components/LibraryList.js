import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

// Purpose: a function that map "state" to this component "LibraryList" as props
// state: global state object (application state in redux store)
// return: the new state object
const mapStateToProps = (state) => {
  console.log(state);
  return {
    libraries: state.libraries,
  };
};

export default connect(mapStateToProps)(LibraryList);
