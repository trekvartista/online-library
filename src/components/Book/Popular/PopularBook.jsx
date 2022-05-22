import { StarBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { BOOK_ROUTE } from "../../../utils/consts";

const PopularBook = ({ book }) => {
    return (
        <NavLink to={BOOK_ROUTE + '/' + book.id}>
            <div className="flex flex-row gap-2 p-3 w-auto  shadow-xl hover:scale-[99%] bg-white">
                <img src={book.imgUrl} className="w-16 h-24 shrink-0" alt="" />
                <div className="flex flex-wrap flex-col w-full">
                    <span className="text-gray-500">{book.title}</span>
                    <span className="font-semibold">{book.author}</span>
                    <div className="flex items-center gap-1 text-gray-500">
                        <StarBorder fontSize="small" />
                        {book.rating}
                    </div>
                    <div className="w-1/2">
                        <Button variant="outlined" size="small">
                            Read
                        </Button>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default PopularBook;
