import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBooks } from "./reducers/BookReducer.js"

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
            <ul>
                {this.props.items.data.map((item) => (
                    <li key={item.id}>
                        {item.id}
                    </li>
                    ))}
                }}
            </ul>
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