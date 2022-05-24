import Books from './pages/Books';
import Admin from './pages/Admin';
import Book from "./pages/Book";
import Library from "./pages/Library";
import { BOOK_ROUTE, LIBRARY_ROUTE , ADMIN_ROUTE, BOOKS_ROUTE, WISH_LIST_ROUTE} from "./utils/consts";
import WishList from './pages/WishList';

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
        path: WISH_LIST_ROUTE,
        Component: WishList
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