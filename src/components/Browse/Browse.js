import React, { Component } from 'react';
import './Browse.css';
import Nav from '../Nav/Nav';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {getBook} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Browse extends Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get('api/books').then(books => {
            return this.setState({
                books: books.data
            })
        })
    }

    render() {
        console.log(this.state.books)
        const { books } = this.state;
        return (
            <div id='Browse'>
            <Nav /> 
            <div className='list-container'>
                {books.map((e, i, arr) => {
                    return (
                        <div key={i}>
                        <div className='book-container'>
                        <img align='left' className='photo-container' src={e.image} alt='' />
                            <h1>{e.title}</h1>
                            <p>by {e.author}</p>
                            <Link to={`/details/${e.book_id}`}>
                            <div className='details-button' onClick={()=>{this.props.getBook(e.book_id)}}>Details</div>
                            </Link>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default connect(null, {getBook})(Browse);