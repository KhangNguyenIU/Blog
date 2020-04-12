import React, { useState } from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';
/**
* @author
* @function NavBar
**/

const NavBar = (props) => {

  const[search, setSearch]=useState(false);

  const submitSearch=(e)=>{
    e.preventDefault();
    alert("Searchign...")
  }

  const openSearch=()=>{
    setSearch(true);
  }

  const searchClass = search? "searchInput active" : "searchInput";

  return(
    <div className="navbar">
        <ul className="navMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact</NavLink></li>
        
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}>
            <input placeholder="Search.." type="text" className={searchClass}/>
            <img onClick={openSearch} className="searchIcon" alt="" src={require('../..//assets/icons/search.png')}/>
          </form>
          
        </div>
    </div>
   )

 }

export default NavBar