import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class YourCart extends PureComponent {

    render() {

        return (
            <div className="BookTable">
                {this.props.cart.map(book => <div>{book.id}</div>)}
            </div>
        )
    }
}

YourCart.propTypes = {
    items: PropTypes.object.isRequired,
    cart: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        cart: state.cartReducer.cart
    };
};

export default connect(mapStateToProps)(YourCart);