import React, { PureComponent } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import YourCart from "./YourCart.js";
import './index.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBooks } from "./reducers/BookReducer.js"

class App extends PureComponent {

    componentDidMount() {
        this.props.fetchBooks("http://localhost:3001/api/book?page=1");
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/cart" component={YourCart}/>
                    </Switch>
                </div>
                <div>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    cart: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        cart: state.cartReducer.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: (url) => dispatch(fetchBooks(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
