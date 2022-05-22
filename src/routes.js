import Books from './pages/Books';
import Admin from './pages/Admin';
import Book from "./pages/Book";
import Library from "./pages/Library";
import { BOOK_ROUTE, LIBRARY_ROUTE , ADMIN_ROUTE, BOOKS_ROUTE} from "./utils/consts";

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE,
        Component: Library
    },
    {
        path: BOOKS_ROUTE,
        Component: Books
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: Book
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]