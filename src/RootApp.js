import { BrowserRouter, Link, Route } from 'react-router-dom'
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import Page1 from './routes/page1'
import Page2 from './routes/page2'
import Page3 from './routes/page3'
import Listener from './Listener';

const Test = () => {
  return (
    <div>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
    </div>
  )
};

export default class extends Component {
  render() {

    return (
      <BrowserRouter>
          <div className="VenacleApp">
              <Helmet
                title="Venacle"
              />
              <span>App</span>
              <Link to={'/page1'}>page1</Link>
              <Link to={'/page2'}>page2</Link>
              <Link to={'/page3'}>page3</Link>

              <Test />

            <Route component={Listener} />
          </div>
      </BrowserRouter>
    )
  }
}