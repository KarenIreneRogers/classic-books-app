import BookList from '../components/books/BookList'
import NewBookModal from '../components/modals/NewBookModal'
import DeleteBookModal from '../components/modals/DeleteBookModal'
import ViewMoreModal from '../components/modals/ViewMoreModal'


//import type { Book, NewBook } from '../types'

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
function HomePage(helpers: any) {

  return (
    <div>
      <h1>Classic Books</h1>
 <div className="d-flex flex-grow-1 flex-column ">
      <BookList 
        books={ helpers.booksState } 
        onDeleteBook={ helpers.handleOpenDeleteModal}
        onToggleRead={helpers.toggleRead}
        onViewMoreOfBook = {helpers.handleOpenViewMoreModal}
      />
    </div>
    <NewBookModal
      show = {helpers.showAddModal}
      onHide={helpers.handleCloseAddModal}
      onSubmit={helpers.addBook}
    />
    <DeleteBookModal
      show = {helpers.showDeleteModal}
      onHide={helpers.handleCloseDeleteModal}
      onConfirm={helpers.handleConfirmDelete}
      book={helpers.bookToDelete}
    />
    <ViewMoreModal
      show = {helpers.showViewMoreModal}
      onHide = {helpers.handleCloseViewMoreModal}
      book={helpers.bookToViewMoreOf}
      onToggleRead = {helpers.toggleRead}
    /> 
  </div>
  
  )
}

export default HomePage