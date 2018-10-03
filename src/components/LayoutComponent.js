import React, { Component } from 'react';

import NavComponent from './NavComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';

class LayoutComponent extends Component {
    render() {
        return (
            <div>
                <NavComponent/>
                <HeaderComponent/>
                <MainComponent/>
                <FooterComponent/>
                <div>{ this.props.children }</div>
            </div>
        );
    }
}

export default LayoutComponent;