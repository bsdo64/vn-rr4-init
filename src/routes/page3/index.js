import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { state: state }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: amount => dispatch({ type: 'INCREMENT' }),
  }
}


class Page3 extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>
      Page 3

      {
        this.props.state.get('posts').map((v, i) => {
          return <div key={i}>{v.get('title')}</div>
        })
      }
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page3)
