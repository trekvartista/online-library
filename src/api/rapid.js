import axios from "axios";

const options = {
    method: "GET",
    url: "https://bookshelves.p.rapidapi.com/books",
    headers: {
        "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
        "X-RapidAPI-Key": "10b214a5f7msha805feb48e244f0p16cebbjsn749d108354e4",
    },
};

export const listBooks = async () => {
    const { Books } = await axios
        .request(options)
        .then((response) => response.data)
        .catch(function (error) {
            console.error(error);
        });
    return Books;
};
