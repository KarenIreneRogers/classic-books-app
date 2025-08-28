import { useState} from 'react'

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import BookList from "./components/books/BookList";
import { books} from "./data/books";
import type { Book,NewBook, SortableBookKey} from "./types"
import NewBookModal from './components/modals/NewBookModal';
import DeleteBookModal from './components/modals/DeleteBookModal';
import ViewMoreModal from './components/modals/ViewMoreModal';
function App() {

  // useState hook creates a state variable (booksState)
  // and a function (setBooksState) to update the books state.
  // The initial value of booksState will be TEST_DATA from 
  // the ./data/books file.
  const [booksState, setBooksState] = useState(books)
  
  // State for controlling modal visibility
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);
  const [showViewMoreModal, setShowViewMoreModal] = useState(false);
  const [bookToViewMoreOf, setBookToViewMoreOf] = useState(booksState[0]);
  //Handler functions for the Add Book Modal
  const handleOpenAddModal = () => {
    setShowAddModal(true);
 
  }

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  }

  //Handler functions for the Delete Book Modal
  const handleOpenDeleteModal = (bookId: string) => {
    const book = booksState.find((b) => b.id === bookId);
    if(book) {
      setBookToDelete(book);
      setShowDeleteModal(true);
    }
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setBookToDelete(null);
  };

  // Handler functions for the View More Modal
  const handleOpenViewMoreModal = (bookId: string) => {
    const bookToView = booksState.find((b) => b.id === bookId);
    if(bookToView) {
      setBookToViewMoreOf(bookToView);
      setShowViewMoreModal(true);
    }
  }

  const handleCloseViewMoreModal = () => {
    setShowViewMoreModal(false);
//    setBookToViewMoreOf(null);
  }


  // The addBook function is a handler function to add a new book
  // to the books state.  It will be passed down to the Sidebar
  // component where the actual adding will be called for with a button click.
  const addBook = (newBookData: NewBook) => {
    // For now, create a new book here to be added each time.
    // Eventually, a form will be used to allow the user to input
    // the data for the new book.

    const newBook: Book ={
      id: `${Date.now()}`, // Unique identifier for this book
      ...newBookData,
      createdAt: new Date().toISOString() ,
      updatedAt: new Date().toISOString() ,
      updatedOrderAt: "2025-01-01T00:00:00:000Z"
    }
    // Use setBooksState to update the books array
    setBooksState((prevBooks) => [newBook, ...prevBooks]);
    
    // Close the modal after adding the book
    handleCloseAddModal();
}



// The sortBooks function sorts the array of objects called books based on the field identified by sortByCategory into alphabetical order. 
const sortBooks = (sortByCategory: SortableBookKey) => {
  setBooksState((prevBooks) => {
    const newOrder = [...prevBooks].sort((a, b) => {
      const aValue = a[sortByCategory].toString().toUpperCase();
      const bValue = b[sortByCategory].toString().toUpperCase();
      

      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });
    // Changing the updatedOrderAt field changes the state so rendering occurs.
    const newUpdatedOrder = newOrder.map((book) => {
      return {
        ...book,
        updatedOrderAt: new Date().toISOString()
      };
    });
    return newUpdatedOrder;
  });
};
const sortByTitle= () => {
  sortBooks("title");
}

const sortByAuthor = () => {
  sortBooks("authorLast");
}

const sortByReadStatus = () => {
  sortBooks("read");
}


// The delete book function will actually happen in the BookCard component, so define it hear and pass it down.
const deleteBook = (bookId: string) => {
  // Use the setBooksState function to update the books array
  setBooksState((prevBooks) => {
    // filter out the book which matches the id.  
    // This makes a new array with all of the books except the one to be deleted.
    return prevBooks.filter((book) => book.id !== bookId);
  });
};

// Handler function to confirm car deletion.
const handleConfirmDelete = () => {
  if(bookToDelete){
    deleteBook(bookToDelete.id);
  }
}
  
// The toggleRead function updates the read part of the state
// and changes between the open outline book and the red filled in 
// book icons.  Access it by clicking on the icons.
const toggleRead = (bookId: string) => {
  setBooksState((prevBooks) => {
    return prevBooks.map((book) => {
      if(book.id === bookId) {
        return {
          ...book,   // Spread all existing book properties
          read: !book.read,  // toggle the read property
          updatedAt: new Date().toISOString(),  // Update the date
        }
      }
      return book;
    });
  });
};

return (
<>
  <div className="d-flex flex-row" id="app-container">
    <Sidebar 
    //  onAddBook={addBook} 
      handleOpenAddModal = {handleOpenAddModal}
      onSortByTitle={sortByTitle}
      onSortByAuthor={sortByAuthor}
      onSortByReadStatus={sortByReadStatus}
    />
    <div className="d-flex flex-grow-1 flex-column ">
      <BookList 
        books={booksState} 
        onDeleteBook={handleOpenDeleteModal}
        onToggleRead={toggleRead}
        onViewMoreOfBook = {handleOpenViewMoreModal}
      />
    </div>
    <NewBookModal
      show = {showAddModal}
      onHide={handleCloseAddModal}
      onSubmit={addBook}
    />
    <DeleteBookModal
      show = {showDeleteModal}
      onHide={handleCloseDeleteModal}
      onConfirm={handleConfirmDelete}
      book={bookToDelete}
    />
    <ViewMoreModal
      show = {showViewMoreModal}
      onHide = {handleCloseViewMoreModal}
      book={bookToViewMoreOf}
    />
  </div>
</>
  )
}

export default App


