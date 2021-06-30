import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class YourCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
        }
    }
    
    render() {
        if(this.props.items.data) {
            let state = this.state;
            {console.log(state)}
            this.props.cart.map(cart => (
                this.props.items.data.find(function (post, index) {
                    if (post.id == cart.id) {
                        state.cartItems.push(post);
                    }
                })
            ));
        }
        return (
            <div className="BookTable">
                {this.state.cartItems.map((item) => (
                    <div key={item.id}> {item.id}
                    <p>dsads</p>
                        {console.log(item)}
                    </div>
                ))
                }
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