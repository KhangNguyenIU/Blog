import React from 'react'
import "./style.css";
/**
* @author
* @function NavBar
**/

const NavBar = (props) => {
  return(
    <div className="navbar">
        <ul className="navMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Contact</a></li>
        
        </ul>
        <div className="search">
          <input placeholder="Search.." type="text"/>
          <img alt="" src={require('../..//assets/icons/search.png')}/>
        </div>
    </div>
   )

 }

export default NavBar