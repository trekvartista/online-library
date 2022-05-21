import React from "react";
import { NavLink } from "react-router-dom";
import { BOOK_ROUTE } from "../../utils/consts";

const Book = ({ book }) => {
    return (
        <NavLink to={BOOK_ROUTE + '/' + book.id}>
            <div className="flex flex-col p-3 w-32 h-auto shadow-xl hover:scale-[99%] bg-white">
                <img src={book.img} className="w-full h-36 shrink-0" alt="" />
                <span className="text-gray-500 mt-2">{book.name}</span>
                <span className="font-semibold">{book.author}</span>
                <span className="mt-auto ml-auto text-gray-500">
                    <b className="text-black">{book.rating}</b>/5
                </span>
            </div>
        </NavLink>
    );
};

export default Book;
