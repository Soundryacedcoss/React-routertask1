import React from 'react'
import {Link, Outlet} from "react-router-dom";
export default function Navlink() {
  return (
    <div className='navlink'>

    <nav>
        <Link to='/Home'>Home</Link>
        <Link to='Gallery'>Gallery</Link>
        <Link to='/Event'>Event</Link>
        <Link to='/Feedback'>Feedback</Link>
        <Link to="/Contact">Contact</Link>
      <Outlet/>
    </nav>
    
    </div>
    
  )
}
