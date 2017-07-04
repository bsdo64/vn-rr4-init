import { BrowserRouter, Link, Route } from 'react-router-dom'
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import Loader from './components/Loader';
import loadPage1 from 'bundle-loader?lazy!./components/Page1'
import loadPage2 from 'bundle-loader?lazy!./components/Page2'

const Page1 = (props) => {
    return (
        <Loader load={loadPage1}>
            {Page1 => <Page1 {...props}/>}
        </Loader>
    )
}


const Page2 = (props) => {
    return (
        <Loader load={loadPage2}>
            {Page2 => <Page2 {...props}/>}
        </Loader>
    )
}

export default class RootApp extends Component {
    // componentDidMount() {
    //     loadPage1(() => {})
    //     loadPage2(() => {})
    // }
    render() {
        return (
        <BrowserRouter>
        <div className="VenacleApp">
            <Helmet
                title="Venacle"
            />
            <div>
                <Link to={'/'}>App</Link>
            </div>
            <div>
                <Link to={'/page1'}>page1</Link>
            </div>
            <div>
                <Link to={'/page2'}>page2</Link>
            </div>
            
            <div>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </div>
        </div>
        </BrowserRouter>
        )
    }
}