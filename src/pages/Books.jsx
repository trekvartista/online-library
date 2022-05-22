import React, { useEffect, useState } from "react";
import { getBooksTC, showBooks } from "../redux/features/booksSlice";
import Book from "../components/Book/Book";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";

const Books = () => {
    const books = useSelector(showBooks);
    const dispatch = useDispatch();

    const [searchMode, setSearchMode] = useState(false);
    const [activeBooks, setActiveBooks] = useState([]);

    useEffect(() => {
        dispatch(getBooksTC());
    }, []);

    useEffect(() => {
        setActiveBooks([...books]);
    }, [books]);

    return (
        <div className="flex flex-col  bg-gray-200 py-12 px-4 md:px-14 xl:px-24">
            <Search
                books={books}
                setActiveBooks={setActiveBooks}
                setSearchMode={setSearchMode}
            />
            <div className="flex flex-wrap flex-row gap-4 mt-12">
                {activeBooks?.map((book, i) => (
                    <Book key={i} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;
