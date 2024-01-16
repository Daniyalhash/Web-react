import React from "react";
import Nav from "./nav";
import './about.css'
class About extends React.Component{
    render(){
        return(
            
              <div>
        <Nav />
        <div className="container-about">
          <h2>About</h2>
          
          {/* Other content specific to the home page */}
        </div>
      </div>
        )
    }
}
export default About