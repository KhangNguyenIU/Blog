import React ,{ useState, useEffect }from 'react'
import "./style.css";
import Card from '../UI/Card';
import blogPost from "../../data/blog.json"
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
    
  }, [posts]);

  return(
    <div className="sidebarContainer" style={{
      width:props.width
    }}>
      <Card style={{marginBottom:'20px',padding:'10px', boxSizing:'border-box'}}>
        <div className="cardHeader">
            <span>About Us</span>
        </div>

        <div className="profileImageContainer">
          <img src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        </div>

        <div className="cardBody">
          <p className="personalBio">We design fashioa; website to spread experiences</p>
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'10px', boxSizing:'border-box'}}>
        <div className="cardHeader">
            <span>Social Media</span>
        </div>
      </Card>

      

      <Card style={{marginBottom:'20px',padding:'10px', boxSizing:'border-box'}}>
        <div className="cardHeader">
            <span>Recent Post</span>
        </div>
        {
        posts.map(post=>{
          return(
        <NavLink key={post.id} to={`/post/${post.id}`}>
             <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
            </div>
        </NavLink>
      
          )
        })
      }
      </Card>

    </div>
   )

 }

export default Sidebar