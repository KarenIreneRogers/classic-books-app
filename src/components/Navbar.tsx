import { Link, useLocation } from 'react-router-dom';
import{ Navbar as BootstrapNavbar, Button, ButtonGroup, Container, 
   Nav} from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';


function Navbar(helpers:any) {
  // useLocation hook gets the current URL path which 
  // will be used to highlight the active navigation link
  const location = useLocation();
 
  return (
    // Use Bootstrap Navbar for the styling and behavior
    <BootstrapNavbar bg="dark" variant="dark" expand = "lg">
      <Container>
        {/* Hamburger menu button for mobile devices */}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navigation links that collapse on mobile version */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>

            <Nav.Link 
              as={Link}
              to="/read"
              active={location.pathname === "/read"}
            >
              Read
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/reading-list"
              active={location.pathname === "/reading-list"}
            >
              Reading List
            </Nav.Link>
         </Nav>     

        <>
          <p className="navbar-text">
         Arrange By:  
         </p>

        <ButtonGroup
                    className="d-flex align-items-center mx-3"
                    >
          <Button 
            id="arrangeByTitle"
            variant="secondary"
            name="title"
            onClick={helpers.sortByTitle}
          >
            Title
          </Button>
          <Button
            id="arrangeByAuthor"
            variant="secondary"
            name = "author"
            onClick={helpers.sortByAuthor} 
          >
            Author
          </Button>

          <Button
            id="arrangeByCategory"
            variant="secondary"
            name="category"
            onClick={helpers.sortByCategory}
          >
            Category
          </Button>

        </ButtonGroup>
        </>
          

         <>
          {/* Need to add an onClick for this button with the handleOpenAddModal function */}
          <Button
            variant="success"
            className="d-flex align-items-center gap-2 mx-5"
            id="addBookButton"
            onClick={helpers.handleOpenAddModal}
          >
            <FaPlus /> {/* Plus icon */}
            New Book
          </Button>
          </>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  
  )
}

export default Navbar