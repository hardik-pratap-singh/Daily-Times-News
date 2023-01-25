
import Navbar from "../src/components/Navbar"
import { useEffect , useState } from "react"
import axios from "axios" 
import './App.css'
import Newsitem from "./components/Newsitem";



function App() {


  // let a = [] ; 
  const [text, setText] = useState('India'); 
  const [news , setNews ] = useState([]) ; 
  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q="+text+"&sources=bbc-news&apiKey=ef321c68074544eeb8b728d3d1c16d3a&lang=en")
    // axios.get("https://newsapi.org/v2/everything?sources=bbc-news&apiKey=ef321c68074544eeb8b728d3d1c16d3a&lang=en")
  .then((x) => {
    setNews(x.data.articles) ; 
  })


  },[text, setText]); 



  return (
    <>
    <Navbar text = {text} settext = {setText}  />
    <br /><br />
    <h3 className = "mx-3" style={{fontWeight : 800}}> {`Displaying News Related to - ${text}`}</h3>
    <br /><br />
    
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
