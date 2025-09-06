import "./BookCard.css";

import type { Book} from "../../types";
import { IoBook } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";


interface BookCardProps {
  book: Book
  onDeleteBook: (bookId: string) => void;
  onToggleRead: (bookId: string, isReadNot: boolean) => void;
  onViewMoreOfBook: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({
  book: {id,title, authorFirst, authorLast, description, 
    read, pubDate, category },
  onDeleteBook,
  onToggleRead,
  onViewMoreOfBook,
}) => {

  
  return (
    <div className = "book-card">
      <div className = "read-icon">
        {read ? ( 
          <IoBook onClick={() => onToggleRead(id, false)}/> 
        ): (
          <IoBookOutline onClick={() => onToggleRead(id, true)} />
        )}
      </div>
      <br></br>
      <div className="book-details">
        <h3>
          "{title},"
        </h3>
        <h3>by {authorFirst} {authorLast}</h3>
        <h3>({pubDate})</h3>
        <p>
          {description?.slice(0, 80)}...
          <span className="view-more" onClick={() => onViewMoreOfBook(id)}>View More</span>
        </p>
        <p>Category: {category}</p>
      </div>
      <div className="book-footer">
        {/* <button className="edit-btn">Edit</button>  */}
        <button 
          className="delete-btn"
          style={{height: '40px', width:'100%'}}
          onClick={() => onDeleteBook(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard