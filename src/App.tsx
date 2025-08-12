import { useState } from 'react'

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import BookList from "./components/books/BookList";
import { books} from "./data/books";
function App() {
  return (
<div className="app-container">
  <h1>Classic Books</h1>
  <Sidebar/>
  <BookList books={books}/>
</div>
  )
}

export default App
