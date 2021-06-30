import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBooks } from "./reducers/BookReducer.js"
import "./home.css";
import cartAdd from './plus-symbol-in-a-rounded-black-square.svg';
import { addToCart } from './reducers/Cart.js';

class Home extends PureComponent {

    componentDidMount() {
        this.props.fetchBooks("http://localhost:3001/api/book?page=1");
    }

    handleAddToCart = (id) => {
        console.log(id);
        this.props.addToCart(id);
        console.log(this.props.cart);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        if(this.props.items.data == null) {
            return null;
        }
        return (
            <div className="BookTable">
                    {this.props.items.data.map((item) => (
                    <div className="book-container" title={item.title} key={item.id}>
                        <div className="add-button">
                            <input title="Add to cart" type="image" className="cart-add" src={cartAdd} onClick={() => {
    this.handleAddToCart(item.id)
}}/>
                        </div>
                        <div className="book-wrapper">
                            <div className="book-image"><img src={item.cover_url} alt={item.title}/></div>
                            <div className="book-info-wrapper">
                                <p className="book-title">{item.title}</p>
                                <p className="book-author">{item.author}</p>
                                <p className="book-pages">p. {item.pages}</p>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        )
    }
}

Home.propTypes = {
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
        fetchBooks: (url) => dispatch(fetchBooks(url)),
        addToCart: (id) => dispatch(addToCart(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);