import React from 'react'
import './Sidebar.css'
import AddBook from './AddBook'
import ArrangeBy from './ArrangeBy'


export default function Sidebar() {
  return (
    <div className = "sidebar">
      <h3>This is the Sidebar</h3>
      <AddBook/>
      <ArrangeBy/>

    </div>
  )
}
