import { Clear } from "@mui/icons-material";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";

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
    const filters = ["All", "Title", "Author"];

    const [searchText, setSearchText] = useState("");
    const [genre, setGenre] = useState("");
    const [filter, setFilter] = useState("");

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const applyFilters = () => {
        let newBooks;

        newBooks = books.filter((book) => {

            let filter_condition;
            let genre_condition;

            if (filter === "Title") {
                filter_condition = book.title.toLowerCase().includes(searchText.toLowerCase());
            }
            else if (filter === "Author") {
                filter_condition = book.author.toLowerCase().includes(searchText.toLowerCase());
            }
            else {
                filter_condition = 
                        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
                        book.author.toLowerCase().includes(searchText.toLowerCase());
            }

            genre_condition = book.genre.toLowerCase().includes(genre.toLowerCase())

            return filter_condition && genre_condition;
        });

        // Alphabetic Sort
        newBooks.sort((a, b) => a.title.localeCompare(b.title));

        // console.log(newBooks)
        setActiveBooks(newBooks);
    };

    const resetFilters = () => {
        if (searchText || filter || genre) {
            setSearchText("");
            setGenre("");
            setFilter("");
        }
    };

    const handleSubmit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();

            setSearchMode(true);

            applyFilters();
        }
    };

    useEffect(() => {
        // setSearchMode(true);
        applyFilters();
    }, [genre, filter]);

    return (
        <div className="flex flex-row flex-wrap sm:flex-nowrap mx-4 md:mx-14 xl:mx-48 gap-4 items-center ">
            <div className="w-full sm:w-3/5">
                <TextField
                    className="w-full"
                    variant="outlined"
                    autoComplete="off"
                    placeholder="Type a book name or author..."
                    value={searchText}
                    onKeyUp={(e) => handleSubmit(e)}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="flex flex-row items-center gap-1 w-full sm:w-2/5">
                <div className="w-1/2">
                    <FormControl fullWidth size="small">
                        <InputLabel>Filters</InputLabel>
                        <Select
                            label="Filters"
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
                <div className="w-1/2 mr-4">
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
                <Tooltip title="Reset the filters">
                    <Button
                        variant="outlined"
                        color="info"
                        onClick={() => resetFilters()}
                    >
                        <Clear />
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
};

export default Search;
