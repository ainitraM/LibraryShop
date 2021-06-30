import React, { PureComponent } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import YourCart from "./YourCart.js";
import './index.css';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart" component={YourCart}/>
                </div>
                <div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
