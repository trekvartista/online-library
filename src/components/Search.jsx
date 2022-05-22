import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useState } from "react";

const Search = ({ books, setActiveBooks, setSearchMode }) => {
    const genres = [
        "Literary Fiction",
        "Mystery",
        "Thriller",
        "Horror",
        "Historical",
        "Romance",
        "Science Fiction",
        "Fantasy",
        "Distopia",
        "Utopia",
        "Biograpgy",
    ];
    const filters = ["Alphabet", "Title", "Author"];

    const [searchText, setSearchText] = useState("");
    const [genre, setGenre] = useState("");
    const [filter, setFilter] = useState("");

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSubmit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();

            setSearchMode(true);

            let newBooks = books.filter((book) =>
                book.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setActiveBooks(newBooks);
        }
    };

    return (
        <div className="flex flex-row flex-wrap sm:flex-nowrap mx-4 md:mx-14 xl:mx-48 gap-4 items-center ">
            <div className="w-full sm:w-3/5">
                <TextField
                    className="w-full"
                    variant="outlined"
                    placeholder="Type a book name or author..."
                    value={searchText}
                    onKeyUp={(e) => handleSubmit(e)}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="flex flex-row items-center gap-1 w-full sm:w-2/5">
                <div className="w-1/2">
                    <FormControl fullWidth size="small">
                        <InputLabel>Sort by</InputLabel>
                        <Select
                            label="Sort by"
                            value={filter}
                            onChange={(e) => handleFilterChange(e)}
                        >
                            {filters.map((item, i) => (
                                <MenuItem key={i} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="w-1/2">
                    <FormControl fullWidth size="small">
                        <InputLabel> Genre </InputLabel>
                        <Select
                            label="Genre"
                            value={genre}
                            onChange={(e) => handleGenreChange(e)}
                        >
                            {genres.map((item, i) => (
                                <MenuItem key={i} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default Search;
