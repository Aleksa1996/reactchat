import React, { Component } from 'react';

import Navigation from './Navigation';
import Router from '../Router';

class Layout extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                {/* <Navigation /> */}
                {/* <div class="page"> */}
                <Router />
                {/* </div> */}
            </React.Fragment>
        );
    }
}

export default Layout;
