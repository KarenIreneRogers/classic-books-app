import React from 'react'
import './Sidebar.css'
import AddBook from './AddBook'

export default function Sidebar() {
  return (
    <div className = "sidebar">
      <h3>This is the Sidebar</h3>
      <AddBook/>
    </div>
  )
}
