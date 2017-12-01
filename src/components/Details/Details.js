import React, {Component} from 'react';
import './Details.css';
import Nav from '../Nav/Nav';

class Details extends Component {
    render() {
        return (
            <div className ='Details'>
            <Nav />
             <h1> This is Details component</h1>
            </div>
        )
    }
}

export default Details;