import React, { Component } from 'react';

import './App.css';
import LayoutComponent from './components/LayoutComponent';
import { Route, BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ LayoutComponent }>
                    <Route path="/index.html" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
