import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../api/rapid";
// import { fetchBooks } from "../api/books";
import Book from "../components/Book/Book";
import Popular from "../components/Book/Popular";
import PopularBook from "../components/Book/Popular/PopularBook";
import Recommended from "../components/Book/Recommended";
import Search from "../components/Search";
import { getBooksTC, showBooks } from "../redux/features/booksSlice";

const Library = () => {
    
    const [recommendedBooks, setRecommendedBooks] = useState([
        {id: 99, title: 'Unnamed Book', author: 'NoName', rating: 3.9, imgUrl: "https://images-na.ssl-images-amazon.com/images/I/31fT+jozW2L._SX331_BO1,204,203,200_.jpg"},
        {id: 100, title: '1984', author: 'Orwell', rating: 4.5, imgUrl: "http://prodimage.images-bn.com/pimages/9780451524935_p0_v5_s1200x630.jpg"},
        {id: 101, title: 'Мы', author: 'Замятин', rating: 4.6, imgUrl: "https://cdn.ast.ru/v2/ASE000000000838830/COVER/cover1__w340.jpg"},
        {id: 102, title: 'O divnyi novyi mir', author: 'Old OS', rating: 4.6, imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"},
        {id: 103, title: '451 Farenheit', author: 'Bradbury', rating: 4.5, imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg"},
    ])

    const books = useSelector(showBooks)
    const dispatch = useDispatch()

    const [activeBooks, setActiveBooks] = useState([...recommendedBooks])

    useEffect(() => {
        // fetchBooks().then(data => console.log(data))

        // dispatch(getBooksTC())
    }, [])

    return (
        <div className="flex flex-col  bg-gray-200 py-12 px-4 md:px-14 xl:px-24">
            
            <Search books={recommendedBooks} activeBooks={activeBooks} setActiveBooks={setActiveBooks} />

            <Recommended books={activeBooks} />

            {/* <Popular recommendedBooks={recommendedBooks} /> */}

        </div>
    );
};

export default Library;
