import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import Book from "../components/Book/Book";
import PopularBook from "../components/Book/PopularBook";
import Search from "../components/Search";

const Library = () => {
    
    const [recommendedBooks, setRecommendedBooks] = useState([
        {id: 0, name: 'Unnamed Book', author: 'NoName', rating: 3.9, img: "https://images-na.ssl-images-amazon.com/images/I/31fT+jozW2L._SX331_BO1,204,203,200_.jpg"},
        {id: 1, name: '1984', author: 'Orwell', rating: 4.5, img: "http://prodimage.images-bn.com/pimages/9780451524935_p0_v5_s1200x630.jpg"},
        {id: 2, name: 'Мы', author: 'Замятин', rating: 4.6, img: "https://cdn.ast.ru/v2/ASE000000000838830/COVER/cover1__w340.jpg"},
        {id: 3, name: 'O divnyi novyi mir', author: 'Old OS', rating: 4.6, img: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"},
        {id: 4, name: '451 Farenheit', author: 'Bradbury', rating: 4.5, img: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg"},
    ])

    return (
        <div className="flex flex-col  bg-gray-200 py-12 px-4 md:px-14 xl:px-24">
            
            <Search />

            <div className="flex flex-col gap-4 mt-12 pb-8 border-b-2 border-b-gray-300">
                <div className="flex flex-row gap-10">
                    <span className="text-violet-700">Recommended</span>
                    <span>Last added</span>
                </div>  
                <div className="flex flex-wrap flex-row gap-4">
                    {
                        recommendedBooks.map( (book, i) => 
                            <Book key={i} book={book} />
                        )
                    }
                </div>
            </div>

            <div className="flex flex-col gap-3 mt-10 ">
                <div>
                    <span className="text-blue-500">Popular books</span>
                </div>
                <div className="grid gap-4 mx-0 my-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        recommendedBooks.map( (book, i) => 
                            <PopularBook key={i} book={book} />
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Library;
