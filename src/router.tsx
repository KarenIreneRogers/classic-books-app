import HomePage from './pages/HomePage'
import { createBrowserRouter } from 'react-router-dom'
import ReadBooks from './pages/ReadBooks'
import FavoriteBooks from './pages/FavoriteBooks'
import Layout from './components/Layout'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
    
      {
        // Home page route which is the default when someone visits.  
        // This shows all books.

        //index: true,
        element: <HomePage />,
      },
      {
        // Read books
        path: "read",
        element: <ReadBooks/>,
      },
      {
        // Favorite books
        path: "favorites",
        element: <FavoriteBooks />,
      }
    ]}
])
  
    
