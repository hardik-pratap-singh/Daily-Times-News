import React from 'react'
import { useState } from 'react';
import "./Navbar.css" ; 

function Navbar({ text, settext , mode , toggleMode}) {

    const [text1, settext1] = useState("")

    const handleOnChange = (event) => {
        settext1(event.target.value)
    }

    const lightmode = {
        color : 'black' , 
        backgroundColor : "white", 

    }

    const darkmode = {
        color : "white" , 
        backgroundColor : "black"

    }

    const func = () => {

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={mode==="light" ? "light" : "dark"} >
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ fontSize: "30px", fontWeight: 1000 }} href="/">Daily Times</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
                    style={{backgroundColor : mode === "dark" && "white"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            
                        </ul>
                        
                        
                        <form className="d-flex" role="search" >
                            <input id="" onClick={func} value={text1} onChange={handleOnChange} style={mode === "light" ? lightmode : darkmode } className="form-control me-2" type="search" placeholder="search topics like tesla,russia,india,farmers,..." aria-label="Search" />
                            <button className={`btn btn-outline-${mode === "light" ? "success" : "primary" }`} type="submit" onClick={(e) => { e.preventDefault(); settext(text1) }}>Search</button>
                        </form>
                        <div className="form-check form-switch mx-3" id="modehandler">
                                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                {/* <label className="form-check-label" style={{color : mode==="light" ? "black" : "white"}}  htmlFor="flexSwitchCheckDefault"><b>{mode === "light" ? "Dark Mode" : "Light Mode"}</b></label> */}
                                <label className="form-check-label" style={{color : mode==="light" ? "black" : "white"}}  htmlFor="flexSwitchCheckDefault"><b>{mode === "light" ? <><img className = "img" src="https://developer.mozilla.org/static/media/theme-dark.2204a73b9b7fbc5e0219.svg" alt="Dark Mode" /></> : <><img id = "moon" className='img' src="/moon.png" alt="Light Mode" /></>}</b></label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
