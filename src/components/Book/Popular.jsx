import React from "react";

const Popular = ({recommendedBooks}) => {
    return (
        <div className="flex flex-col gap-3 mt-10 ">
            <div>
                <span className="text-blue-500">Popular books</span>
            </div>
            <div className="grid gap-4 mx-0 my-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {recommendedBooks.map((book, i) => (
                    <PopularBook key={i} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Popular;
