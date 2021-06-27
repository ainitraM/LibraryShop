import React, { PureComponent } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./Home.js"

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
