import React, {Component} from 'react';
import './Cart.css';
import Nav from '../Nav/Nav';

class Cart extends Component {
    render() {
        return (
            <div className ='Cart'>
            <Nav />
             <h1> This is Cart component</h1>
            </div>
        )
    }
}

export default Cart;