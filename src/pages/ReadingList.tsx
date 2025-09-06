import BookList from '../components/books/BookList'
import NewBookModal from '../components/modals/NewBookModal'
import DeleteBookModal from '../components/modals/DeleteBookModal'
import ViewMoreModal from '../components/modals/ViewMoreModal'
import type { Book } from '../types'

function ReadingList(helpers: any) {
  console.log("Made it to the Reading List page.")
  console.log(helpers.booksState[5])

  const readBooks = helpers.booksState.filter((book:Book) => (! book.read));


  return (
    <div>
      <h1>Reading List</h1>
      <div className="d-flex flex-grow-1 flex-column ">
        <BookList 
          books={ readBooks } 
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
        onToggleRead={helpers.toggleRead}
      />
    </div>
  
  )
}

export default ReadingList