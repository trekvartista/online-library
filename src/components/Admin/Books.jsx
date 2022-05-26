import { AddOutlined } from "@mui/icons-material";
import { Alert, Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksTC, showBooks } from "../../redux/features/booksSlice";
import AddBook from "./AddBook";
import ChangeBook from "./ChangeBook";

const Books = () => {

    const books = useSelector(showBooks);
    const dispatch = useDispatch();

    const [activeBooks, setActiveBooks] = useState([]);
    const [isAddBook, setAddBook] = useState(false);
    const [addBookAlert, setAddBookAlert] = useState(false);

    const [isChangeBook, setChangeBook] = useState(false);
    const [changedBook, setChangedBook] = useState({});
    const [changeBookAlert, setChangeBookAlert] = useState(false);

    const [isRemoveBook, setRemoveBook] = useState(false);
    const [removeBookTitle, setRemoveBookTitle] = useState("");
    const [removeAlert, setRemoveAlert] = useState(false);

    const handleBookAddition = () => setAddBook(true);
    const handleBookAdditionClose = () => setAddBook(false);

    const handleBookChange = () => setChangeBook(true);
    const handleBookChangeClose = () => setChangeBook(false);

    const handleBookDeletion = () => setRemoveBook(true);
    const handleBookDeletionClose = () => setRemoveBook(false);

    const handleAddBookAlertClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setAddBookAlert(false);
    };

    const handleChangeBookAlertClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setChangeBookAlert(false);
    };

    const handleRemoveAlertClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setRemoveAlert(false);
    };


    useEffect(() => {
        dispatch(getBooksTC());
        // console.log(localStorage);
    }, []);
    
    useEffect(() => {
        setActiveBooks([...books]);

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
        setActiveBooks([...ls_books])

    }, [books]);

    const changeBook = () => {};
    const removeBook = (title) => {
        let books = JSON.parse(localStorage.getItem("books"));
        books = books.filter((book) => book.title !== title);
        localStorage.setItem("books", JSON.stringify(books));

        setActiveBooks([...books]);
        handleBookDeletionClose();
        setRemoveAlert(true);
    };



    return (
        <div className="flex flex-col w-full">
            {
                // the little construction below forces ChangeBook modal to rerender. That helps a little
            }
            {isAddBook && (
                <AddBook
                    open={isAddBook}
                    handleClose={handleBookAdditionClose}
                    setAddBookAlert={setAddBookAlert}
                />
            )}
            {isChangeBook && (
                <ChangeBook
                    changedBook={changedBook}
                    open={isChangeBook}
                    handleClose={handleBookChangeClose}
                    setChangeBookAlert={setChangeBookAlert}
                />
            )}

            {isRemoveBook && (
                <Modal
                    open={isRemoveBook}
                    onClose={handleBookDeletionClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[800px] border-2 bg-white border-black shadow-xl p-4">
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Are you sure?
                        </Typography>
                        <Box className="flex flex-row gap-2 max-w-[150px] mt-4 ml-auto">
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => removeBook(removeBookTitle)}
                            >
                                Remove
                            </Button>
                            <Button
                                variant="outlined"
                                color="info"
                                onClick={() => handleBookDeletionClose()}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            )}

            <Snackbar
                open={addBookAlert}
                autoHideDuration={5000}
                onClose={handleAddBookAlertClose}
            >
                <Alert
                    onClose={handleAddBookAlertClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    You've added the book! Refresh the page to see the changes.
                </Alert>
            </Snackbar>
            <Snackbar
                open={removeAlert}
                autoHideDuration={5000}
                onClose={handleRemoveAlertClose}
            >
                <Alert
                    onClose={handleRemoveAlertClose}
                    severity="warning"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    You've removed the book!
                </Alert>
            </Snackbar>
            <Snackbar
                open={changeBookAlert}
                autoHideDuration={5000}
                onClose={handleChangeBookAlertClose}
            >
                <Alert
                    onClose={handleChangeBookAlertClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    You've changed the book!
                </Alert>
            </Snackbar>

            <div className="flex flex-row items-center justify-between">
                <span className="m-4  text-2xl font-semibold text-blue-700">
                    Books
                </span>
                <Button variant="outlined" onClick={() => handleBookAddition()}>
                    <AddOutlined className="mr-1 mb-[2px]" />
                    Add book
                </Button>
            </div>
            <div className="flex flex-col gap-4  border-t-2 border-t-gray-400">
                <div className=" flex flex-row mx-4 mt-4 text-sm text-gray-600 ">
                    <div className="w-6/12">Title</div>
                    <div className="w-1/6">Rating</div>
                    <div>Genre</div>
                </div>

                <div className="flex flex-col">
                    {activeBooks.map((book, i) => (
                        <div
                            key={i}
                            className="flex flex-row items-center rounded-md my-2 p-3 bg-white"
                        >
                            <div className="flex flex-row gap-1 md:gap-3 xl:gap-6 w-1/2">
                                <div className="shrink-0">
                                    <img
                                        src={book.imgUrl}
                                        className="w-10 h-15"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col  overflow-hidden whitespace-nowrap text-ellipsis">
                                    <span className="text-gray-700">
                                        {book.title}
                                    </span>
                                    <span className="font-semibold">
                                        {book.author}
                                    </span>
                                </div>
                            </div>
                            <div className="w-1/6">
                                <b>{book.review?.slice(0, 3) || 0}</b>/5
                            </div>
                            <div className="w-1/6 font-semibold text-gray-600">
                                {book.genre}
                            </div>

                            <div className="flex flex-col gap-2 ml-auto">
                                <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() => {
                                        // console.log(book)
                                        setChangedBook({ ...book });
                                        handleBookChange();
                                    }}
                                >
                                    Change
                                </Button>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="error"
                                    onClick={() => {
                                        setRemoveBookTitle(book.title);
                                        handleBookDeletion();
                                    }}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Books;
