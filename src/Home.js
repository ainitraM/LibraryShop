import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchBooks } from "./reducers/BookReducer.js"
import "./home.css";

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
                <table>
                    <thead className="tableThead">
                    <tr>
                        <th className="table__th">ID</th>
                        <th className="table__th">Picture</th>
                        <th className="table__th">Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.items.data.map((item) => (
                        <tr>
                            <th className="table-th">{item.id}</th>
                            <th className="table-th"><img src={item.cover_url}></img></th>
                            <th className="table-th">{item.title}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
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