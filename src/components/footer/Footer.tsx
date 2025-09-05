import { IoBook, IoBookOutline } from 'react-icons/io5'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer footer-fixed-bottom">
      <div className="container text-center text-md-start mt-1">
        <div className="row text-center ">
          <p>
            Click icon to change between 
            Read <IoBook className="read-icon-footer"/>  and 
            Unread <IoBookOutline className="read-icon-footer"/>  status
          </p>
        </div>
        <div className = "row text-center ">
          <p >
             © 2025 Classic Book Reading List, All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer