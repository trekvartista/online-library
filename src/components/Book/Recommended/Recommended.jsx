import React from "react";
import Book from "../Book";

const Recommended = ({books}) => {
    return (
        <div className="flex flex-col gap-4 mt-12 pb-8 border-b-2 border-b-gray-300">
            <div className="flex flex-row gap-10">
                <span className="text-violet-700">Recommended</span>
                <span>Last added</span>
            </div>
            <div className="flex flex-wrap flex-row gap-4">
                {books.slice(0, 9).map((book, i) => (
                    <Book key={i} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Recommended;
