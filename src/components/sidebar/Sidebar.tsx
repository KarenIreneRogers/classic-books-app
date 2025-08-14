import { type FC} from 'react'
import './Sidebar.css'
//import AddBook from './AddBook'
import ArrangeBy from './ArrangeBy'

interface SidebarProps {
  onAddBook: () => void;
}
// Define the Sidebar component.
// This component creates a navigation bar that handles the AddBook
// functionality through the onAddBook prop.
const Sidebar: FC<SidebarProps> = ({onAddBook}) => {
  return (
    <nav className="sidebar" >
      <div id="sidebar" 
        className = "border-end  p-3 d-flex flex-column"
      >
        
          <div  id="title">
            Classic Books
          </div>
        

        <li>
          <a href="/#books"
            onClick={onAddBook}
          >
            Add Book
          </a>
        </li>
   
        <br/>
        <ArrangeBy/>

      </div>
    </nav>
  )
}

// Export the component so that it can be imported into other files
export default Sidebar;
