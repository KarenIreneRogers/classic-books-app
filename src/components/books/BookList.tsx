import { type FC } from 'react'
import "./BookList.css"
import type { Book } from "../../types"
import BookCard from "./BookCard"

type BookListProps = {
  books: Book[];
  onDeleteBook: (bookId: string) => void;
}
 const BookList: FC<BookListProps> = ({ books, onDeleteBook}) => {
  return (
    <div id="books" className="book-list">
      {books?.map((book) => (
        <BookCard key = {book.id} book={book} onDeleteBook={onDeleteBook} />
      ))}

    </div>
  );
};

export default BookList;