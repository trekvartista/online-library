import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

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
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    }
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

                    <Box>
                        <FormControl
                            fullWidth
                            // onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-2"
                        >
                            <Controller
                                name="title"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        variant="outlined"
                                        placeholder="Book title..."
                                        error={errors?.title ? true : false}
                                        // helperText="This field is required."
                                        value={value}
                                        onChange={onChange}
                                        {...register("title", { required: true, maxLength: 100 })}
                                    />
                                    )}
                                    />
                            {errors?.title?.type === "required" && <p className="text-red-600">This field is required.</p>}
                            {errors?.title?.type === "maxLength" && <p className="text-red-600">The title cannot exceed 100 characters.</p>}

                            <Controller
                                name="author"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        variant="outlined"
                                        placeholder="Book author..."
                                        error={errors?.author ? true : false}
                                        value={value}
                                        onChange={onChange}
                                        {...register("author", { required: true, maxLength: 64 })}
                                    />
                                )}
                            />
                            {errors?.author?.type === "required" && <p className="text-red-600">This field is required.</p>}
                            {errors?.author?.type === "maxLength" && <p className="text-red-600">The author name cannot exceed 100 characters.</p>}

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select genre
                                </InputLabel>
                                <Controller
                                    name="genre"
                                    defaultValue=""
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={value}
                                            label="__________"
                                            onChange={onChange}
                                            {...register("genre", { required: false })}
                                        >
                                            {genres.map((item, i) => (
                                                <MenuItem key={i} value={item}>
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>

                            <Controller
                                name="description"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        multiline
                                        variant="outlined"
                                        placeholder="Book description..."
                                        error={errors?.description ? true : false}
                                        className="my-3"
                                        value={value}
                                        onChange={onChange}
                                        {...register("description", { required: false, maxLength: 2048 })}
                                    />
                                )}
                            />
                            
                            {errors?.description?.type === "maxLength" && <p className="text-red-600">The description cannot exceed 2048 characters.</p>}

                            <Controller
                                name="file"
                                defaultValue={undefined}
                                control={control}
                                render={({ field: { onChange, ref } }) => (
                                    <TextField
                                        required
                                        type="file"
                                        error={!!errors?.file}
                                        ref={ref}
                                        onChange={onChange}
                                        {...register("file", { required: true })}
                                    />
                                )}
                            />
                            
                            {errors?.file?.type === "required" && <p className="text-red-600">This field is required.</p>}

                            <Box className="flex flex-row gap-2 max-w-[150px] mt-4 ml-auto">
                                <Button
                                    variant="outlined"
                                    color="success"
                                    onClick={handleSubmit(onSubmit)}
                                    type="submit"
                                >
                                    Add
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleClose()}
                                >
                                    Close
                                </Button>
                            </Box>
                        </FormControl>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default AddBook;