import { $host } from "./api";

export const getBooks = async () => {
    const { args } = await $host
        .get("get/books")
        .then((response) => response.data)
        .catch((error) => console.error("(1) Inside error:", error));

    return args;
};
