import { BrowserRouter, Link, Route } from 'react-router-dom'
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import Page1 from './components/Page1'
import Page2 from './components/Page2'

const Test = () => {
    return (
        <div>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </div>
    )
}

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
            <Link to={'/page2'}>page3</Link>
            
            <Test />
        </div>
        </BrowserRouter>
        )
    }
}