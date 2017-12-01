import React, {Component} from 'react';
import './Browse.css';
import Nav from '../Nav/Nav';

class Browse extends Component {
    render() {
        return (
            <div className ='Browse'>
            <Nav />
             <h1> This is Browse component</h1>
            </div>
        )
    }
}

export default Browse;