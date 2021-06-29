import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBooks } from "./reducers/BookReducer.js"
import "./home.css";
import cartAdd from './plus-symbol-in-a-rounded-black-square.svg';

class Home extends PureComponent {

    componentDidMount() {
        this.props.fetchBooks("http://localhost:3001/api/book?page=1");
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
                    <div className="book-container">
                        <div className="add-button">
                            <img className="cart-add" src={cartAdd}></img>
                        </div>
                        <div className="book-wrapper">
                            <div className="book-image"><img src={item.cover_url} alt={item.title}></img></div>
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
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: (url) => dispatch(fetchBooks(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);