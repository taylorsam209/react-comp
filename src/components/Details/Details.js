import React, {Component} from 'react';
import './Details.css';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux'

class Details extends Component {
    render() {

        console.log(this.props.currentBook);
        const {title, author, image, genre, in_stock, description} = this.props.currentBook;

        return (
            <div id='Details'>
            <Nav />
             <h1> This is Details component</h1>
             <div className='details-container'>
             <div className='book-box'>
             <img className='photo-container' align='left' src={image} alt=''/>
             <p>Title: {title}</p>
             <p>Author: {author}</p>
             <p>Genre: {genre}</p>
             <p>Description: {description}</p>
             </div>
             </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentBook: state.currentBook
    }
}

export default connect(mapStateToProps)(Details);