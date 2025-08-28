import { type FC } from 'react'
import type { Book } from '../../types';
import { Modal } from 'react-bootstrap';
import { IoBook, IoBookOutline } from 'react-icons/io5';
import "./ViewMoreModal.css";


interface ViewMoreModalProps {
  show: boolean;
  onHide: () => void;
  book:Book ;
//  onToggleRead: (bookId: string) => void;
}
const ViewMoreModal: FC<ViewMoreModalProps> = ({
  show,
  onHide, 
   book : {title, authorFirst, authorLast, description, 
    read, pubDate, category },
//  onToggleRead,
}) => {
  return (
    <Modal show = {show} onHide = {onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Complete Description</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className = "read-icon">
          {read ? ( 
            <IoBook/>
  //          <IoBook onClick={() => onToggleRead(id)}/> 
          ): (
            <IoBookOutline/>
   //         <IoBookOutline onClick={() => onToggleRead(id)} />
          )}
        </div>
        <br></br>
        <div className="book-details">
          <h2>
            "{title},"
          </h2>
          <h2>by {authorFirst} {authorLast}</h2>
          <h2>({pubDate})</h2>
          <div className="book-description-modal">
            <p >
              {description}
            </p>
          </div>
        <p>Category: {category}</p>
      </div>
      <div className="book-footer">
        {/* <button className="edit-btn">Edit</button>  */}
{/*         <button 
          className="delete-btn"
          style={{height: '40px', width:'100%'}}
          onClick={() => onDeleteBook(id)}
        >
          Delete
        </button> */}
      </div>       
      </Modal.Body>




      
    </Modal>


  )

  
}

export default ViewMoreModal