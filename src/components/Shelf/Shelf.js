import React, {Component} from 'react';
import './Shelf.css';
import Nav from '../Nav/Nav';

class Shelf extends Component {
    render() {
        return (
            <div className ='Shelf'>
            <Nav />
             <h1> This is Shelf component</h1>
            </div>
        )
    }
}

export default Shelf;