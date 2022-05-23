import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const AddBook = ({ open, handleClose }) => {

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

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("")
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                className="overflow-scroll absolute top-0 left-0 block h-full"
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] lg:w-[800px] border-2 bg-white border-black shadow-[24px] p-4">
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Add a new book!
                    </Typography>

                    <Box className="flex flex-col mt-3 gap-2">
                        <TextField
                            variant="outlined"
                            placeholder="Book title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            placeholder="Book author..."
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Select genre
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={genre}
                                label="__________"
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                {genres.map((item, i) => (
                                    <MenuItem key={i} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* <TextField
                            variant="outlined"
                            placeholder="Book genre..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> */}
                        <TextField
                            multiline
                            variant="outlined"
                            placeholder="Book description..."
                            className="my-3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <TextField
                            type="file"
                            value={undefined}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </Box>
                    <Box className="flex flex-row gap-2 max-w-[150px] mt-4 ml-auto">
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={() => {}}
                        >
                            CREATE
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleClose()}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default AddBook;
