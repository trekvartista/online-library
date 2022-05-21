import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const Library = () => {
    const [category, setCategory] = useState("");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="flex w-full bg-gray-200 py-12 px-4 md:px-14 xl:px-24">
            <div className="flex flex-row mx-48 gap-12 items-center w-full">
                <div className="w-4/5">
                    <TextField
                        className="w-full"
                        variant="outlined"
                        placeholder="Type a book name or author..."
                    />
                </div>
                <div className="w-1/5">
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
        </div>
    );
};

export default Library;
