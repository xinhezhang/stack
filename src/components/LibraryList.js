import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    // https://facebook.github.io/react-native/docs/listview.html
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2)
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
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
