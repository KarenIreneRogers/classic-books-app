import { type FC } from 'react'
import "./BookList.css"
import type { Book } from "../../types"
import BookCard from "./BookCard"

type BookListProps = {
  books: Book[];
  onDeleteBook: (bookId: string) => void;
  onToggleRead: (bookId: string, isRead: boolean) => void;
  onViewMoreOfBook: (bookId: string) => void;  
}
 const BookList: FC<BookListProps> = ({ 
  books, 
  onDeleteBook, 
  onToggleRead,
  onViewMoreOfBook 
  }) => {
  return (
    <div id="books" className="book-list">
      {books?.map((book) => (
        <BookCard 
          key = {book.id} 
          book={book} 
          onDeleteBook={onDeleteBook} 
          onToggleRead={onToggleRead}
          onViewMoreOfBook={onViewMoreOfBook}
          />
      ))}

    </div>
  );
};

export default BookList;