import React from 'react'
import './Newsitem.css'
const Newsitem = (props) => {
  const mode = props.mode ; 

  const lightstyle = {
    backgroundColor : "white"  , 
    color : "black",
    // width : "18rem"
  }

  const darkstyle = {
    backgroundColor : "#450000", 
    color : "white" ,
    // width : "18rem"
  }


  return (
    // <div className="chas" style={{width : "100%"}}>
        <div className="card my-3 mx-3 col-md-4 class11" style={mode === "light" ? lightstyle : darkstyle}>
          <img src={props.urlToImage} className="card-img-top" alt="Not Found" />
          <div className="card-body" style={mode === "light" ? lightstyle : darkstyle}>
            <h5 className="card-title" style={{fontWeight : 800}}>{props.title}</h5>
            <p className="card-text" style={mode === "light" ? lightstyle : darkstyle}>{props.desc}</p>
            <a href={props.url} className={`btn btn-${mode === "light" ? "primary" : "dark"}`}>Read More..</a>
          </div>
        </div>
    // </div> 
  )
}

export default Newsitem
