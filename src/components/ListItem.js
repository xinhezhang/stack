import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';

import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const { descriptionStyle } = styles;
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    //console.log(this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  descriptionStyle: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
};

// ownProps === this.props
const mapStateToProps = (state, ownProps) => {
  const expanded = (state.selectedLibraryId === ownProps.library.id);

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
