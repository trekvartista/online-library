import { AddOutlined } from "@mui/icons-material";
import { Alert, Button, Modal, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const WishList = () => {

    const [wishedBooks, setWishedBooks] = useState([])

    const [isRemoveBook, setRemoveBook] = useState(false);
    const [removeBookTitle, setRemoveBookTitle] = useState("");
    const [removeAlert, setRemoveAlert] = useState(false);

    const handleBookDeletion = () => setRemoveBook(true);
    const handleBookDeletionClose = () => setRemoveBook(false);

    const handleRemoveAlertClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setRemoveAlert(false);
    };

    const removeBook = (title) => {
        let wishListBooks = JSON.parse(localStorage.getItem("wishedBooks"));
        wishListBooks = wishListBooks.filter( (book) => book.title !== title);
        localStorage.setItem("wishedBooks", JSON.stringify(wishListBooks));

        setWishedBooks([...wishListBooks]);
        handleBookDeletionClose();
        setRemoveAlert(true);
    }

    useEffect(() => {
        let wishListBooks =
            JSON.parse(localStorage.getItem("wishedBooks")) || [];

        setWishedBooks([...wishListBooks]);
    }, []);

    return (
        <div className="flex flex-col px-4 py-16 md:px-16 xl:px-40 bg-slate-200">
            <div className="flex flex-row items-center justify-between">
                <span className="m-4  text-2xl font-semibold text-blue-700">
                    Desired Books
                </span>
            </div>
            <div className="flex flex-col gap-4  border-t-2 border-t-gray-400">
                <div className=" flex flex-row mx-4 mt-4 text-sm text-gray-600 ">
                    <div className="w-6/12">Title</div>
                    <div className="w-1/6">Rating</div>
                    <div>Genre</div>
                </div>

                <div className="flex flex-col">
                    {wishedBooks.map((book, i) => (
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
                open={removeAlert}
                autoHideDuration={4000}
                onClose={handleRemoveAlertClose}
            >
                <Alert
                    onClose={handleRemoveAlertClose}
                    severity="warning"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    You've removed the book from your wish list!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default WishList;
