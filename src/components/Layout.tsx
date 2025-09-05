import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer/Footer';
 
function Layout(helpers:any) {

  return (
    <div className = "app-container">
      {/*<Navbar onNewBook={() => setShowNewBookModal(true)} /> */}
      <Navbar {...helpers}  />

  
      {/* Main content area - this is where the pages render */}
      <main className = "main-content">
        <Container>
          <Outlet />
        </Container>
      </main> 

      <div>
        <Footer/>
      </div> 
      
    </div>
  );
}
export default Layout;