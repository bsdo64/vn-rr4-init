import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import {Hello } from './hello';

export default class extends Component {
  constructor(){
    super();

    this.state = {
      value: 1
    }
  }

  changed(event){
    this.setState({
      value: event.target.valueAsNumber
    })
  }

  render() {

    return <div>
      Page 1
      <input type="number" value={this.state.value} onChange={e => this.changed(e)} />

      <Link to={`${this.props.match.url}/hello`}>hello</Link>


      <Route path={`/page1/hello`} component={Hello} />
    </div>
  }
}



