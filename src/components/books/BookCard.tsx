import "./BookCard.css";

import type { Book} from "../../types";
import { IoBook } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";


interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({
  book: {title, author, description, read, pubDate }
}) => {
  return (
    <div className = "book-card">
      <div className = "read-icon">
        {read ?  <IoBook /> : <IoBookOutline />}
      </div>
      <br></br>
      <div className="book-details">
        <h3>
          "{title}," by {author} ({pubDate})
        </h3>
        <p>
          {description?.slice(0, 150)}...
          <span className="view-more">View More</span>
        </p>
      </div>
      <div className="book-footer">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default BookCard