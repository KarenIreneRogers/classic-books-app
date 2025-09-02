import { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NewBookModal from './modals/NewBookModal';
import Navbar from './Navbar';
 
function Layout() {

// const [showNewBookModal, setShowNewBookModal] = useState(false);
  const [sortByString, setSortByString] = useState("none");

  return (
    <div className = "app-container">
      {/*<Navbar onNewBook={() => setShowNewBookModal(true)} /> */}
      <Navbar />


      {/* Main content area - this is where the pages render */}
      <main className = "main-content">
        <Container>
          <Outlet />
        </Container>
      </main>  
      

   {/*    <NewBookModal 
        show={showNewBookModal}
        onHide={() => setShowNewBookModal(false)}
        /> */}
    </div>
  );
}
export default Layout;