import HomePage from './pages/HomePage'
import { createBrowserRouter } from 'react-router-dom'
import ReadBooks from './pages/ReadBooks'
import Layout from './components/Layout'
import ReadingList from './pages/ReadingList'

/* type helperProps = {
  books: Book[];
  setBooksState: () => void;
  sortByTitle: () => void;
  sortByAuthor: () => void;
  sortByReadStatus: ()=> void;
  toggleRead: (bookId: string) => void;

  bookToViewMoreOf: Book;
  setBookToViewMoreOf: () => void;
  showViewMoreModal: boolean;
  handleOpenViewMoreModal: (bookId: string) => void;
  handleCloseViewMoreModal: () => void;

 
  showAddModal: boolean;
  handleOpenAddModal: () => void;
  handleCloseAddModal: () => void;
  addBook: (newBookData: NewBook) => void;

  bookToDelete: Book | null;
  setBookToDelete: () => void;
  showDeleteModal: boolean;
  handleOpenDeleteModal: (bookId: string) => void;
  handleCloseDeleteModal: () => void;
  handleConfirmDelete: () => void;
} */

export const createRouter = (helpers : any) => createBrowserRouter([
    {
      path: '/',
      element: <Layout {...helpers} />,
      children: [
    
      {
        // Home page route which is the default when someone visits.  
        // This shows all books.

        //index: true,
        path: "/",
        element: <HomePage {...helpers} />,
      },
      {
        // Read books
        path: "read",
        element: <ReadBooks {...helpers}/>,
      },
      {
        // Reading List - not yet read
        path: "reading-list",
        element: <ReadingList {...helpers} />,
      }
    ]}
])
     
