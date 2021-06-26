import React from 'react';
import logo from './shopping-cart.svg';
import { Link } from 'react-router-dom'
import './App.css';

const Navbar = ()=>{
    return(
        <div className="Nav-Wrapper">
            <div className="Nav-Container">
                <Link to="/" className="Brand">
                    <h1>WelcomeLibarary 📚</h1>
                </Link>
                <Link to="/cart"><img srcset={logo} className="Cart"></img></Link>
            </div>
        </div>
    )
}

export default Navbar;