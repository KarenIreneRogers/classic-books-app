import { useState, type FC } from "react"
import type {NewBook} from "../../types"
import { Button, Form, Modal } from "react-bootstrap"

interface NewBookModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (bookData: NewBook) => void;
}
const NewBookModal: FC<NewBookModalProps> = 
  ({show, onHide, onSubmit}) => {

  // State for form data
  const[formData, setFormData] = useState<NewBook>({
    title: "",
    authorFirst: "",
    authorLast: "",
    publisher: "",
    pubCity: "",
    pubDate: "",
    description: "",
    category: "",
    read: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset Form after submission
    setFormData({
      title: "",
      authorFirst: "",
      authorLast: "",
      publisher: "",
      pubCity: "",
      pubDate: "",
      description: "",
      category: "",
      read: false,
    })
  }

  const handleClose = () => {
    // Reset form data when closing
        setFormData({
      title: "",
      authorFirst: "",
      authorLast: "",
      publisher: "",
      pubCity: "",
      pubDate: "",
      description: "",
      category: "",
      read: false,
    });
    onHide();
  };


  const handleInputChange= (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> 
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return(
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type = "text"
              name = "title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author's First Name</Form.Label>
            <Form.Control
              type = "text"
              name = "authorFirst"
              value={formData.authorFirst}
              onChange={handleInputChange}
              placeholder="Enter author's first name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author's Last Name</Form.Label>
            <Form.Control
              type = "text"
              name = "authorLast"
              value={formData.authorLast}
              onChange={handleInputChange}
              placeholder="Enter author's last name"
              required
            />
          </Form.Group>
{/* 
          <Form.Group className="mb-3">
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              type = "text"
              name = "publisher"
              value={formData.publisher}
              onChange={handleInputChange}
              placeholder="Enter publisher"
              //required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Publication city</Form.Label>
            <Form.Control
              type = "text"
              name = "pubCity"
              value={formData.pubCity}
              onChange={handleInputChange}
              placeholder="Enter city of publication"
              //required
            />
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label>Year of Publication</Form.Label>
            <Form.Control
              type = "text"
              name = "pubDate"
              value={formData.pubDate}
              onChange={handleInputChange}
              placeholder="Enter year of publication (1928)"
              //required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea" rows={3}
              type = "text"
              name = "description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description (https://www.penguin.co.uk/discover/articles/100-must-read-classic-books)  "
              //required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <select 
              value={formData.category}
              name = "category"
              onChange={handleInputChange}
            >
             Enter literary category
             <option> Choose one:</option>
             <option value="Fiction">Fiction</option>
             <option value="Sci-fi">Science Fiction</option>
             <option value="Non-Fiction">Non-Fiction</option>
             <option value="Biography">Biography</option>
            </select>

          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Read Status: Check the box if you have read the book</Form.Label>
            <Form.Check
              type = "checkbox"
              name = "read"
             // value={formData.read}
              onChange={handleInputChange}
              placeholder="Check if you have read the book"
              //required
            />
          </Form.Group>   
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick = {handleSubmit}>
          Add Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewBookModal