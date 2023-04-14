import React from 'react'
import { useState } from 'react';

function Navbar({text , settext}) {

    const [text1 , settext1] = useState("")
    
    const handleOnChange = (event)=>{
        settext1(event.target.value) 
    }

    const func = () => {
        
    }

    return (
        <div>
            <nav className="navbar  navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" style = {{fontSize : "30px" , fontWeight : 1000}} href="/">Daily Times</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            
                        </ul>
                        <form className="d-flex" role="search" >
                            <input id="" onClick={func} value={text1} onChange={handleOnChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" onClick={(e)=>{e.preventDefault(); settext(text1)}}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
