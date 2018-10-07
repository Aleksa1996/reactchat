import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';

// import asyncComponent from './hocs/asyncComponent';

// const HomeAsync = asyncComponent(() => import('./components/Pages/Home/Home'));
// const AboutAsync = asyncComponent(() => import('./components/Pages/About/About'));
// const ContactAsync = asyncComponent(() => import('./components/Pages/Contact/Contact'));

const Router = props => {
    return (
        <Switch>
            <Route exact path="/" component={Chat} />
            <Route exact path="/chat" component={Chat} />
            {/* <Route exact path="/contact" component={ContactAsync} /> */}
        </Switch>
    );
};
export default Router;
