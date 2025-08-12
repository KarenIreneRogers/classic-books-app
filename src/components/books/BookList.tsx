import { type FC } from 'react'
import "./BookList.css"
import type { Book } from "../../types"
import BookCard from "./BookCard"

type BookListProps = {
  books: Book[];
}
 const BookList: FC<BookListProps> = ({ books}) => {
  return (
    <div id="books" className="book-list">
      {books?.map((book) => (
        <BookCard key = {book.id} book={book} />
      ))}

    </div>
  );
};

export default BookList;