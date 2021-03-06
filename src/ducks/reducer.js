import axios from 'axios';

const initialState = {
    listing: [],
    user: {},
    currentBook: {}
}

const FULFILLED = '_FULFILLED';
const GET_BOOK = 'GET_BOOK';
const CLEAR_BOOK = 'CLEAR_PROP';

export function clearBook() {
    return {
        type: CLEAR_BOOK,
        payload: {}
    }
}

export function getBook(id){
    let book = axios.get(`/api/book/${id}`)
    .then(book => {
        return book.data
    })
    return {
        type: GET_BOOK,
        payload: book
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOOK + FULFILLED:
        return Object.assign({}, state, {currentBook: action.payload})
        case CLEAR_BOOK:
        return Object.assign({}, state, {currentBook: action.payload})
        default:
            return state;          
    }
}