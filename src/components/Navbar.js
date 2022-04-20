import React from "react";
import '../App.css'
export default function Navbar(){
    return(
        <nav className="nav-bar">
           
                <img src={require(`../images/logo.png`)} />
                <h1>My Travel Journal</h1>
                
            
        </nav>
    )
}