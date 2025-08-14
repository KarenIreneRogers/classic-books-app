import { useState } from 'react'

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import BookList from "./components/books/BookList";
import { books} from "./data/books";
import type { Book} from "./types"

function App() {

  // useState hook creates a state variable (booksState)
  // and a function (setBooksState) to update the books state.
  // The initial value of booksState will be TEST_DATA from 
  // the ./data/books file.
  const [booksState, setBooksState] = useState(books)
  
  // The addBook function is a handler function to add a new book
  // to the books state.  It will be passed down to the Sidebar
  // component where the actual adding will be called for with a button click.
  const addBook = () => {
    // For now, create a new book here to be added each time.
    // Eventually, a form will be used to allow the user to input
    // the data for the new book.

    const newBook: Book ={
      id: `${Date.now()}`, // Unique identifier for this book
      title: "Frankenstein", // Book title
      authorFirst: "Mary",  // Author's first name
      authorLast: "Shelley", // Author's last name
      publisher: " ",       // Space for publisher
      pubCity: " ",         // Space for publication location 
      pubDate: "1823 ",     // Publication date
      description: "Written when Mary Shelley was just 18 years old, but don’t let that depress you. Frankenstein is a Gothic masterpiece with entertaining set pieces aplenty. ",  // Description from this website: https://www.penguin.co.uk/discover/articles/100-must-read-classic-books
      category: " ",
      read: false ,
      createdAt: "2025-08-08T00:00:00.000Z"  ,
      updatedAt: "2025-08-08T00:00:00.000Z"  ,
    }
    // Use setBooksState to update the books array
    setBooksState((prevBooks) => [newBook, ...prevBooks]);
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
  <div className="d-flex flex-row vh-100 " id="app-container">
    <Sidebar onAddBook={addBook}/>
    <div className="d-flex flex-grow-1 flex-column ">
      <BookList 
        books={booksState} 
        onDeleteBook={deleteBook}
        onToggleRead={toggleRead}
      />
    </div>
  </div>
</>
  )
}

export default App


