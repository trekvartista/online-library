// import { getBooks } from "../api/books"


// const SET_BOOKS = 'books/SET_BOOKS'
// const SET_BOOKS_COUNT = 'books/SET_BOOKS_COUNT'

// let initialState = {
//     books: [],
//     booksCount: 0,

// }

// const booksReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case SET_BOOKS:
//             return {...state, books: action.payload}

//         case SET_BOOKS_COUNT:
//             return {...state, booksCount: action.payload}

//         default:
//             return state
//     }
// }

// export const setBooksAC = (books) => ({type: SET_BOOKS, books})
// export const setBooksCountAC = (booksCount) => ({type: SET_BOOKS_COUNT, booksCount})

// export const getBooksTC = () => (dispatch) => {

//     getBooks().then(data => {
//         // dispatch(setBooksAC(data))
//         console.log(data)
//     })

// }

// export default booksReducer;