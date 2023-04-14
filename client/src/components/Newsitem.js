import React from 'react'

const Newsitem = (props) => {

    
  return (
    // <div className="chas" style={{width : "100%"}}>
        <div className="card my-3 mx-3 col-md-4" style={{width : "18rem"}}>
          <img src={props.urlToImage} className="card-img-top" alt="Not Found" />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight : 800}}>{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a href={props.url} className="btn btn-primary">Read More..</a>
          </div>
        </div>
    // </div> 
  )
}

export default Newsitem
