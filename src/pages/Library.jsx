import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book/Book";
import Popular from "../components/Book/Popular/Popular";
import Recommended from "../components/Book/Recommended/Recommended";
import Search from "../components/Search";
import { getBooksTC, showBooks } from "../redux/features/booksSlice";

const Library = () => {

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

            {searchMode ? (
                <div className="flex flex-wrap flex-row gap-4 mt-12">
                    {activeBooks.map((book, i) => (
                        <Book key={i} book={book} />
                    ))}
                </div>
            ) : (
                <div>
                    <Recommended books={books} />
                    <Popular books={books} />
                </div>
            )}
        </div>
    );
};

export default Library;
