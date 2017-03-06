import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

function mapStateToProps(state) {
  return { state: state }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: posts => dispatch({ type: '@@SET_POSTS', payload: posts }),
  }
}


class Listener extends Component {
  componentWillMount() {
    this.loader();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const routeEqual = isEqual(nextProps.match, this.props.match);

    if (routeEqual) {
      return false
    } else {
      this.loader();
    }
  }

  loader() {
    console.log('ajax data');
    this.props.getPosts(require('./posts.json'));
  }

  render() {
    return null;
  }
}


Listener.propTypes = {};
Listener.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Listener)