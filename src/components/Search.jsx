import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const Search = () => {

    const [category, setCategory] = useState("");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="flex flex-row mx-4 md:mx-14 xl:mx-48 gap-4 md:gap-12 items-center ">
            <div className="w-3/5 md:w-4/5">
                <TextField
                    className="w-full"
                    variant="outlined"
                    placeholder="Type a book name or author..."
                />
            </div>
            <div className="w-2/5 md:w-1/5">
                <FormControl fullWidth>
                    <InputLabel> Category </InputLabel>
                    <Select
                        label="Category"
                        value={category}
                        onChange={(e) => handleCategoryChange(e)}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default Search;
