import React from "react";
import { NavLink } from "react-router-dom";
import { BOOK_ROUTE } from "../../utils/consts";
import {StarBorder} from '@mui/icons-material';

const Book = ({ book }) => {
    return (
        <NavLink to={BOOK_ROUTE + "/" + book.id}>
            <div className="flex flex-col p-3 w-32 h-auto shadow-xl hover:scale-[99%] bg-white">
                <img
                    src={book.imgUrl}
                    className="w-full h-36 shrink-0"
                    alt=""
                />
                <span className="overflow-hidden whitespace-nowrap text-ellipsis mt-2 text-gray-500">
                    {book.title}
                </span>
                <span className="overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
                    {book.author}
                </span>
                <div className="flex flex-row items-center gap-1 mt-auto ml-auto text-gray-500">
                    <StarBorder fontSize="small" />
                    <span className="text-gray-500">
                        <b className="text-black">{book.review?.slice(0, 3)}</b>
                        /5
                    </span>
                </div>
            </div>
        </NavLink>
    );
};

export default Book;
