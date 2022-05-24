import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book/Book";
import Popular from "../components/Book/Popular/Popular";
import Recommended from "../components/Book/Recommended/Recommended";
import Books from "./Books";
import Search from "../components/Search";
import { getBooksTC, showBooks } from "../redux/features/booksSlice";
import {useNavigate} from 'react-router-dom';
import { BOOKS_ROUTE } from "../utils/consts";

const Library = () => {

    const navigate = useNavigate()
    const books = useSelector(showBooks);
    const dispatch = useDispatch();

    const [searchMode, setSearchMode] = useState(false);
    const [activeBooks, setActiveBooks] = useState([]);

    useEffect(() => {
        dispatch(getBooksTC());
    }, []);
    
    useEffect(() => {
        setActiveBooks([...books]);

        const ls_books = JSON.parse(localStorage.getItem("books")) || [];
        // console.log(ls_books)

        books.forEach( book => {
            
            let index = ls_books?.findIndex( ls_book => ls_book.title === book.title )
            // console.log(index)
            
            if (index === -1) {
                ls_books.push(book)
            }
        })

        localStorage.setItem("books", JSON.stringify(ls_books))
        setActiveBooks([...ls_books])

    }, [books]);

    useEffect(() => {
        if (searchMode) {
            navigate(BOOKS_ROUTE)
        }
    }, [searchMode])

    return (
        <div className="flex flex-col  bg-gray-200 py-12 px-4 md:px-14 xl:px-24">
            <Search
                books={activeBooks}
                setActiveBooks={setActiveBooks}
                setSearchMode={setSearchMode}
            />

            <div>
                <Recommended books={activeBooks} />
                <Popular books={activeBooks} />
            </div>
        </div>
    );
};

export default Library;
