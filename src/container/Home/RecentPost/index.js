import React from 'react'
import Card from "../../../components/UI/Card";
import "./style.css"
/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
  return(
    <div style= {props.style} >
              <Card style={{marginBottom:'20px'}}>
                <div className="postImageWrapper">
                <img style={{width:'100%'}} src={"https://images.pexels.com/photos/1071049/pexels-photo-1071049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>  
                </div>

                <div style={{textAlign:'center'}}>
                  <span>Features</span>
                  <h2>Fitness mantra to life healthy</h2>
                  <span>posted on 12 july</span>
                  <p>lorem ispum</p>
                  <button>Read more</button>
                </div>
              </Card>

            
              </div>
   )

 }

export default RecentPost