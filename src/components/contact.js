import React from "react";
import Nav from "./nav";
import './contact.css'
class Contact extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <div className="container-contact"><h1>Contact</h1></div>
                
            </div>
        )
    }
}
export default Contact