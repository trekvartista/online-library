import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { showBooks } from "../redux/features/booksSlice";

const Book = () => {
    const { id } = useParams();
    const books = useSelector(showBooks);
    const book = books[id];

    return (
        <div className="flex flex-row gap-5 py-10 px-4 md:px-16 xl:px-40 bg-gradient-to-br from-pink-200 to-cyan-100">
            <div className="flex flex-nowrap w-full gap-8 p-8 bg-white">
                <div className="shrink-0 flex flex-col">
                    <img src={book.imgUrl} className="w-48 h-76 border-2 border-gray-500" alt="" />
                    <span className="mt-4 text-lg text-gray-700">{book.review}</span>
                </div>
                <div className="flex flex-col h-full gap-2">
                    <span className="font-semibold">{book.author}</span>
                    <span className="text-2xl text-gray-700 font-semibold">
                        {book.title}
                    </span>
                    <p>{book.description}</p>

                    <div className="flex flex-row gap-4 mt-auto">
                        <Button variant="contained" color="success" size="small"> Buy now </Button>
                        <Button variant="outlined" size="small"> <b>Add to wish list</b> </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
