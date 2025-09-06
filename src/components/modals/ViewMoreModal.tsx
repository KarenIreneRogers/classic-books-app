import { type FC } from 'react'
import type { Book } from '../../types';
import { Modal } from 'react-bootstrap';
import { IoBook, IoBookOutline } from 'react-icons/io5';
import "./ViewMoreModal.css";


interface ViewMoreModalProps {
  show: boolean;
  onHide: () => void;
  book:Book|null ;
  onToggleRead: (bookId: string, isReadNot: boolean) => void;

}
const ViewMoreModal: FC<ViewMoreModalProps> = ({
  show,
  onHide, 
  book ,
  onToggleRead,
}) => {
  return (

    <Modal show = {show} onHide = {onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Complete Description</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
        {book ? (
        <><div className="read-icon">

              {book.read ? (
                <IoBook onClick={() => onToggleRead(book.id, false)} />
              ) : (
                <IoBookOutline onClick={() => onToggleRead(book.id, true)} />
              )}
            </div><br></br><div className="book-details">
                <h2>
                  "{book.title},"
                </h2>
                <h2>by {book.authorFirst} {book.authorLast}</h2>
                <h2>({book.pubDate})</h2>
                <div className="book-description-modal">
                  <p>
                    {book.description}
                  </p>
                </div>
                <p>Category: {book.category}</p>
              </div><div className="book-footer">

              </div></>
        ) :(
          <div>No book identified yet</div>

        )
      }
      </>
      </Modal.Body>
    </Modal>
  )
}

export default ViewMoreModal