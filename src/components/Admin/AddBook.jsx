import { Box, Typography, Modal, TextField, Button, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const AddBook = ({ open, handleClose, setAddBookAlert }) => {
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

    const { control, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        
        let book = {...data};
        let usedIds = []
        let books = JSON.parse(localStorage.getItem("books"))
        books.forEach(b => usedIds.push(b.id))
        
        const max = 4096, min = 64;
        let randomId = Math.floor(Math.random() * (max - min + 1)) + min;
        while (usedIds.includes(randomId)) {
            randomId = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        book.id = randomId;
        books.unshift(book);
        localStorage.setItem("books", JSON.stringify(books));

        handleClose();
        setAddBookAlert(true);
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
                                        autoComplete="off"
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
                                        autoComplete="off"
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
                                            {...register("genre", { required: true })}
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

                            {errors?.genre?.type === "required" && <p className="text-red-600">This field is required.</p>}

                            <Controller
                                name="description"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        multiline
                                        variant="outlined"
                                        placeholder="Book description..."
                                        autoComplete="off"
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
                                name="imgUrl"
                                defaultValue=""
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextField
                                        error={!!errors?.imgUrl}
                                        value={value}
                                        placeholder="Image URL..."
                                        autoComplete="off"
                                        onChange={onChange}
                                        {...register("imgUrl", {
                                            required:{
                                                value: true,
                                                message: "This field is required."
                                            },
                                            // pattern:{
                                            //     value:/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                                            //     message: "Please enter a valid URL."
                                            // }
                                        })}
                                    />
                                )}
                            />
                            {errors?.imgUrl && <p className="text-red-600">{errors.imgUrl.message}</p>}

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
