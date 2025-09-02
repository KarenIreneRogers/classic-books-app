import HomePage from './pages/HomePage'
import { createBrowserRouter } from 'react-router-dom'
import ReadBooks from './pages/ReadBooks'
import FavoriteBooks from './pages/FavoriteBooks'
import Layout from './components/Layout'



export const createRouter = (helpers:any) => createBrowserRouter([
    {
      path: '/',
      element: <Layout {...helpers} />,
      children: [
    
      {
        // Home page route which is the default when someone visits.  
        // This shows all books.

        //index: true,
        element: <HomePage {...helpers} />,
      },
      {
        // Read books
        path: "read",
        element: <ReadBooks {...helpers}/>,
      },
      {
        // Favorite books
        path: "favorites",
        element: <FavoriteBooks {...helpers} />,
      }
    ]}
])
  
    
