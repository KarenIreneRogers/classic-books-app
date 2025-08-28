import { type FC } from 'react'
import { Button, Modal } from 'react-bootstrap';
import type { Book } from '../../types';

interface DeleteBookModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  book: Book | null;
}

const DeleteBookModal: FC<DeleteBookModalProps> =({
  show,
  onHide,
  onConfirm,
  book
}) => {

  // Define the handler function to handle confirmation
  const handleConfirm = () => {
    onConfirm();
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {book ? (
          <p>
            Are you sure you want to delete{" "}
            <strong>
              {book.title} by {book.authorFirst} {book.authorLast}
            </strong>
            ? This action cannot be undone.
          </p>
        ) : (
          <p>
            Are you sure you want to delete this book? This action cannot be
            undone.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBookModal