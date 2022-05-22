import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../api/books";
import { listBooks } from "../../api/rapid";

const initialState = {
    books: [],
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        getBooks: (state, action) => {
            state.books = action.payload;
        },
    },
});

export const getBooksTC = () => (dispatch) => {
    // listBooks().then((data) => {
    //     console.log(data)
    //     dispatch(getBooks(data));
    // });

    fetchBooks().then(data => {
        // console.log(Object.values(data))
        dispatch(getBooks(Object.values(data)))
    })
};

export const { getBooks } = booksSlice.actions;
export const showBooks = (state) => state.books.books;
export default booksSlice.reducer;
