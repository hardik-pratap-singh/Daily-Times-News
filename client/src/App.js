import React from 'react'

import Navbar from "../src/components/Navbar"
import { useEffect , useState } from "react"
import axios from "axios" 
import './App.css'
import Newsitem from "./components/Newsitem";



function App() {


  const [text, setText] = useState('India'); 
  const [news , setNews ] = useState([]) ; 
  useEffect( () => {
     axios.post(`${process.env.REACT_APP_BASE_URL}`  , {
      title : text ,
    })
  .then((x) => {
    setNews(x.data.articles) ; 
  }) ; 

  // eslint-disable-next-line
  },[text, setText]); 

  return (
    <>
    <Navbar text = {text} settext = {setText}  />
    {/* <br /><br />
    <h3 className = "mx-3" style={{fontWeight : 800}}> {`Displaying News Related to - ${text}`}</h3>
    <br /><br /> */}
    
    <br />
    <br />

    <div className="row">
    { 
      news.map((x) =>{
        return (

          <Newsitem urlToImage={x.urlToImage} title = {x.title} desc = {x.description} url={x.url} key={x.publishedAt}/>
        
        )
      } )
    }
    </div>

    </>
  );
}

export default App;
