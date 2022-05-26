import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Button, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getBooksTC, showBooks } from "../redux/features/booksSlice";

const Book = () => {
    const { id } = useParams();
    const books = useSelector(showBooks);
    const dispatch = useDispatch();

    const [book, setBook] = useState({})
    const [addBookAlert, setAddBookAlert] = useState(false);
    const [duplicateAlert, setDuplicateAlert] = useState(false);

    const handleAddBookAlertClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setAddBookAlert(false);
    };

    const handleDuplicateAlertClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setDuplicateAlert(false);
    };

    const addToWishList = () => {
        let wishListBooks =
            JSON.parse(localStorage.getItem("wishedBooks")) || [];

        const index = wishListBooks.findIndex(
            (wishedBook) => wishedBook.title === book.title
        );

        if (index === -1) {
            wishListBooks.unshift(book);

            localStorage.setItem("wishedBooks", JSON.stringify(wishListBooks));
            setAddBookAlert(true);
        } else {
            setDuplicateAlert(true);
        }
    };

    useEffect(() => {
        dispatch(getBooksTC());
    }, []);

    useEffect(() => {
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
        setBook( ls_books[ls_books.findIndex( ls_book => ls_book.id === Number(id) )] );

    }, [books]);

    return (
        <div className="flex flex-row gap-5 py-10 px-4 md:px-16 xl:px-40 bg-gradient-to-br from-pink-200 to-cyan-100">
            <div className="flex flex-nowrap w-full gap-8 p-8 bg-white">
                <div className="shrink-0 flex flex-col">
                    <img
                        src={book?.imgUrl}
                        className="w-48 h-76 border-2 border-gray-500"
                        alt=""
                    />
                    <span className="mt-4 text-lg text-gray-700">
                        {book?.review}
                    </span>
                </div>
                <div className="flex flex-col h-full gap-2">
                    <span className="font-semibold">{book?.author}</span>
                    <span className="text-2xl text-gray-700 font-semibold">
                        {book?.title}
                    </span>
                    <p>{book?.description}</p>

                    <div className="flex flex-row gap-4 mt-auto">
                        <Button
                            variant="contained"
                            color="success"
                            size="small"
                        >
                            {" "}
                            Buy now{" "}
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => addToWishList()}
                        >
                            {" "}
                            <b>Add to wish list</b>{" "}
                        </Button>

                        <Snackbar
                            open={addBookAlert}
                            autoHideDuration={4000}
                            onClose={handleAddBookAlertClose}
                        >
                            <Alert
                                onClose={handleAddBookAlertClose}
                                severity="success"
                                variant="filled"
                                sx={{ width: "100%" }}
                            >
                                You've added the book to your wish list!
                            </Alert>
                        </Snackbar>

                        <Snackbar
                            open={duplicateAlert}
                            autoHideDuration={4000}
                            onClose={handleDuplicateAlertClose}
                        >
                            <Alert
                                onClose={handleDuplicateAlertClose}
                                severity="warning"
                                variant="filled"
                                sx={{ width: "100%" }}
                            >
                                Wait, you've already added this book to your wish list!
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
