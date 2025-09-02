import { Link, useLocation } from 'react-router-dom';
import{ Navbar as BootstrapNavbar, Button, ButtonGroup, Container, Dropdown, DropdownButton, Nav} from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';

/* interface NavbarProps  {
  setSortByString: () => void
}

 const onSortBooks (sortString: string) => {
    setSortByString(sortString);
  }
function Navbar(setSortByString: NavbarProps) { */

function Navbar() {
  // useLocation hook gets the current URL path which 
  // will be used to highlight the active navigation link
  const location = useLocation();
 
  return (
    // Use Bootstrap Navbar for the styling and behavior
    <BootstrapNavbar bg="dark" variant="dark" expand = "lg" className="mb-3">
      <Container>
        {/* Hamburger menu button for mobile devices */}
        <BootstrapNavbar.Toggle areia-controls="basic-navbar-nav" />
        
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
              to="/favorites"
              active={location.pathname === "/favorites"}
            >
              Favorites
            </Nav.Link>
              
          </Nav>
          
  {/*         <DropdownButton
            as={ButtonGroup}
            id="sort-key"
            variant="success" 
            title="Sort By"
            onClick={onSortBooks(eventKey)}
            className="d-flex align-items-center mb-3 gap-2"
          >
            <Dropdown.Item eventKey="title">Title</Dropdown.Item>
            <Dropdown.Item eventKey="author">Author</Dropdown.Item>
            <Dropdown.Item eventKey="read">Read Status</Dropdown.Item>
          </DropdownButton>   */}        

          
          {/* Need to add an onClick for this button with the handleOpenAddModal function */}
          <Button
            variant="success"
            className="d-flex align-items-center gap-2"
          >
            <FaPlus /> {/* Plus icon */}
            New Book
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  
  )
}

export default Navbar