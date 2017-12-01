import React, {Component} from 'react';
import './Browse.css';
import Nav from '../Nav/Nav';
import axios from 'axios'

class Browse extends Component {
    constructor() {
        super()
        this.state ={
            books: []
        }
    }

    componentDidMount() {
        axios.get('api/books').then(books => {
            return this.setState ({
                books: books.data
            })
        })
    }

    render() {
        console.log(this.state.books)
        const {books} =this.props;
        return (
            <div className ='Browse'>
            <Nav />
             <h1> This is Browse component</h1>
             {books.map((e,i, arr) => {
                 return (
                     <div classname='book-container' key={i}>
                     <h1>{e.title}</h1>
                     </div>
                 )
             })}
            </div>
        )
    }
}

export default Browse;