import React  from "react";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/UI/Card";
import RecentPost from "./RecentPost"
import blogData from "./../../data/blog.json"

const SidebarImage =props=>{
  return(
    <div style={{height:`${props.height}px`}}>
      <img src={props.src}/>  
    </div>
  );
}
const ImageGallary=props=>(
  <div className="gallaryPost" style={props.gallaryStyle}>                
      <section style={{width:'70%'}}>
              <div className="mainImageWrapper">
                   <img src={require('../../blogPostImages/' + props.imagesArray[0])} alt=""/>  
                    </div>

                    </section>

                    <seciton className="sideImageWrapper" style={{width:'30%'}}>
                        <SidebarImage
                          height={props.sideImageHeight}
                          src={require('../../blogPostImages/' + props.imagesArray[1])}
                           alt=""
                        />
                        <SidebarImage
                          height={props.sideImageHeight}
                          src={require('../../blogPostImages/' + props.imagesArray[2])}
                           alt=""
                        />
                        <SidebarImage
                          height={props.sideImageHeight}
                          src={require('../../blogPostImages/' + props.imagesArray[3])}
                           alt=""
                        />
                       hello
                    </seciton>
                </div>
)


const Home= props=>{

  const galeryHeight = 450;
  const sideImageHeight = galeryHeight/3;
  const gallaryStyle ={
    height: galeryHeight+'px',
    overflow:'hidden'
  }

  const  imgArr =blogData.data.map(post => post.blogImage);
    return(
        <div> 
            <Card style={{margin:'20px 0'}}>

            <ImageGallary
                         largeWidth="70%"
                         smallWidth="30%"
                         sideImageHeight={sideImageHeight}
                         gallaryStyle={gallaryStyle}
                         imagesArray ={imgArr}
                  />
             
            </Card>
            <section className="HomeContainer">
              <RecentPost style={{width:'70%'}}/>
              <Sidebar/>
            </section>          
        </div>
    )
};

export default Home;