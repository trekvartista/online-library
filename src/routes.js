import Book from "./pages/Book";
import Library from "./pages/Library";
import { BOOK_ROUTE, LIBRARY_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE,
        Component: Library
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: Book
    }
]