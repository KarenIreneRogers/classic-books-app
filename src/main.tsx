import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider } from 'react-router-dom'
import { createRouter} from './router.tsx'
import type { Book, NewBook, SortableBookKey } from './types.ts'
import { books } from './data/books.ts'
import "./App.css"

function Main() {

    // useState hook creates a state variable (booksState)
    // and a function (setBooksState) to update the books state.
    // The initial value of booksState is empty, and will be filled
    // by the useEffect function which will fetch the data from 
    // the database.
    const [booksState, setBooksState] = useState<Book[]>([]);
    
    // State for controlling modal visibility
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [bookToDelete, setBookToDelete] = useState<Book | null>(null);
    const [showViewMoreModal, setShowViewMoreModal] = useState(false);
    const [bookToViewMoreOf, setBookToViewMoreOf] = useState<Book|null>(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = "http://localhost:3000/books";

    // useEffect hook runs when the component first loads (mounts)
    // Use this to fill the booksState with the data from the database.
    useEffect(() => {
      const fetchBooks = async() => {
        try{
          const response = await fetch(API_URL);

          if(!response.ok) {
            throw new Error("Failed to fetch books");
          }

          const bookData = await response.json();
          setBooksState(bookData);
        } catch(err) {
          setError("Failed to load books");
          console.error("Error fetching books:",err);
        } finally {
          setIsLoading(false);
        }
      };
      //Call the function to fetch the books
      fetchBooks();
      console.log(booksState[0]);
    }, []);  // Empty dependency array on the useEffect runs only once.

  

    //Handler functions for the Add Book Modal
    const handleOpenAddModal = () => {
      setShowAddModal(true);
   
    }
  
    const handleCloseAddModal = () => {
      setShowAddModal(false);
    }
  
    //Handler functions for the Delete Book Modal
    const handleOpenDeleteModal = (bookId: string) => {
      const book = booksState.find((b:Book) => b.id === bookId);
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
      const bookToView = booksState.find((b: Book) => b.id === bookId);
      if(bookToView) {
        setBookToViewMoreOf(bookToView);
        setShowViewMoreModal(true);

        console.log("Book to view is:");
        console.log(bookToView);
      }
    }
  
    const handleCloseViewMoreModal = () => {
      setShowViewMoreModal(false);
  //    setBookToViewMoreOf(null);
    }
  
  
    // The addBook function is a handler function to add a new book
    // to the books state and the API.  This function is active when
    // the Submit button on the NewBookModal is clicked. (Referred to
    // as onSubmit in the modal.)
    const addBook = async (newBookData: NewBook) => {
 
      setError("");
      setIsLoading(true);

      try{
        const response = await fetch (
          `${API_URL}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...newBookData,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              updatedOrderAt: ""
            })
          }
        );
        
        if(!response.ok) {
          throw new Error("Failed to create new book");
        }
        // Close the modal after adding the book
        handleCloseAddModal();

        // Refresh the page to show the new book
        window.location.reload();
      } catch (err) {
        setError("Failed to create book.  Please try again.");
      } finally {
        setIsLoading(false);
      }

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
      // Don't need to update Backend (??)
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

  const sortByCategory = () => {
    sortBooks("category");
  }
  
  // The delete book function will be called from the BookCard component, so define it hear and pass it down.
  const deleteBook = async (bookId: string) => {
    // Delete from backend:
    
    try{
      const response = await fetch(`${API_URL}/${bookId}`, {
        method: "DELETE",
      }
    );
    if(!response.ok) {
      throw new Error("Failed to delete book");
    }
    } catch (error) {
      console.error("Error deleting book:", error);
    } finally {
      setShowDeleteModal(false);
      // Delete from frontend:
      // Use the setBooksState function to update the books array
      setBooksState((prevBooks) => {
      // filter out the book which matches the id.  
      // This makes a new array with all of the books except the one to be deleted.
        return prevBooks.filter((book) => book.id !== bookId);
      });
    };
  };

  
  // Handler function to confirm book deletion.
  const handleConfirmDelete = () => {
    if(bookToDelete){
      deleteBook(bookToDelete.id);
    }
  }
// The toggleRead function updates the read part of the state
// and changes between the open outline book and the red filled in 
// book icons.  Access it by clicking on the icons.
const toggleRead = async (bookId: string, nextReadState: boolean) => {
  
  try{
    const response = await fetch(
      `${API_URL}/${bookId}`,
   
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...books.find((b) => b.id === bookId),
          read: nextReadState,
          updatedAt: new Date().toISOString()
        }),
      }
    );

    if(!response.ok) {
      throw new Error("Failed to update read status");
    }
    setBooksState((prevBooks) => 
   
      prevBooks.map((book) => 
        book.id === bookId ?
          { ...book,   // Spread all existing book properties
            read: nextReadState,  // toggle the read property
            updatedAt: new Date().toISOString(),  // Update the date
          }  : book )    
    );
    if(showViewMoreModal) { // Update the state for the book shown in the 
      // ViewMoreModal.  Otherwise, it takes two clicks on the read icon 
      // to change the state in the bookCard and then the ViewMoreModal.
      
      const bookToView = booksState.find((b: Book) => b.id === bookId);
      if(bookToView) {
        bookToView.read = nextReadState;
        setBookToViewMoreOf(bookToView);
      } 
    }
  } catch (err) {
    console.error("Error updating read status",err);
  }  

} 

const helpers = {
  booksState,
  setBooksState,
  sortByTitle,
  sortByAuthor,
  sortByReadStatus,
  sortByCategory,
  toggleRead,

  bookToViewMoreOf,
  setBookToViewMoreOf,
  showViewMoreModal,
  handleOpenViewMoreModal,
  handleCloseViewMoreModal,

 
  showAddModal,
  handleOpenAddModal,
  handleCloseAddModal,
  addBook,

  bookToDelete,
  setBookToDelete,
  showDeleteModal,
  handleOpenDeleteModal,
  handleCloseDeleteModal,
  handleConfirmDelete,
  
};

const router = createRouter(helpers);
return<RouterProvider router={router} /> ;
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <div className="d-flex flex-row" id="app-container">

    <Main/>
  </div>
  </StrictMode>,
)
