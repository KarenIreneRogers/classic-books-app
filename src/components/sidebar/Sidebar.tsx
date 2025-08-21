import { type FC} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import './Sidebar.css'


interface SidebarProps {
  onAddBook: () => void;
  onSortByTitle: () => void;
  onSortByAuthor: () => void;
  onSortByReadStatus: () => void;
}
// Define the Sidebar component.
// This component creates a navigation bar that handles the AddBook
// functionality through the onAddBook prop.
const Sidebar: FC<SidebarProps> = 
({onAddBook, onSortByTitle, onSortByAuthor, onSortByReadStatus}) => {
  return (
    <nav className="sidebar" >
      <div id="sidebar" 
        className = "border-end  p-3 d-flex flex-column"
      >
        
          <div  id="title">
            Classic Books
          </div>
        

        
          <Button 
            id="addBookButton" 
            variant="primary"
            onClick={onAddBook}
          >
            Add Book
          </Button>
        
   
        <br/>
        <p>
         Arrange By:
         </p>
        <ButtonGroup vertical>
         
          <Button 
            id="arrangeByTitle"
            variant="primary"
            name="title"
            onClick={onSortByTitle}
          >
            Title
          </Button>
          <Button
            id="arrangeByAuthor"
            variant="primary"
            name = "author"
            onClick={onSortByAuthor} 
          >
            Author
          </Button>
          <Button
            id="arrangeByReadStatus"
            variant="primary"
            name="readStatus"
            onClick={onSortByReadStatus}
          >
            Read Status
          </Button>

        </ButtonGroup>
      
      </div>
    </nav>
  )
}

// Export the component so that it can be imported into other files
export default Sidebar;
