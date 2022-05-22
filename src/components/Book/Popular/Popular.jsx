import React from "react";
import PopularBook from "./PopularBook";

const Popular = ({ books }) => {
    return (
        <div className="flex flex-col gap-3 mt-10 ">
            <div>
                <span className="text-blue-500">Popular books</span>
            </div>
            <div className="grid gap-4 mx-0 my-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {books.slice(0, 10).map((book, i) => (
                    <PopularBook key={i} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Popular;
