import { BrowserRouter, Link, Route } from 'react-router-dom'
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import Loader from './components/Loader';
import loadPage1 from 'bundle-loader?lazy!./routes/page1'
import loadPage2 from 'bundle-loader?lazy!./routes/page2'
import loadPage3 from 'bundle-loader?lazy!./routes/page3';
import loadPage4 from 'bundle-loader?lazy!./routes/page4';
import Listener from './Listener';

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

const Page3 = (props) => {
    return (
        <Loader load={loadPage3}>
            {Page3 => <Page3 {...props}/>}
        </Loader>
    )
}

const Page4 = (props) => {
    return (
        <Loader load={loadPage4}>
            {Page4 => <Page4 {...props}/>}
        </Loader>
    )
}

const Test = () => {
  return (
    <div>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
    </div>
  )
};

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
                <Link to={'/page3'}>page3</Link>
            </div>
            <div>
                <Link to={'/page4'}>page4</Link>
            </div>
            
            <Test />

            <Route component={Listener} />
        </div>
        </BrowserRouter>
        )
    }
}