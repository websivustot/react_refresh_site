import React, { Component } from 'react';

import NavComponent from './NavComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import AboutComponent from './AboutComponent';
import { Route, Switch } from 'react-router-dom';

class LayoutComponent extends Component {
    render() {
        return (
            <div>
                <NavComponent/>
                <HeaderComponent/>
                <Switch>
                    <Route path="/index.html" component={ MainComponent }/>
                    <Route exact path="/" component={ MainComponent } />
                    <Route path="/about.html" component={ AboutComponent } />
                </Switch>
                <FooterComponent/>
            </div>
        );
    }
}

export default LayoutComponent;