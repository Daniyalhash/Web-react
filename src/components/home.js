import React from "react";
import Nav from "./nav";
import "./home.css"
class Home extends React.Component { 
    render() { 
    return (     <div>
      <Nav />
      <div className="container-head">
        <h1 className="h1">Welcome to <span>Future</span>!</h1>
        <h2 className="h2">Ma to na sahta</h2>
        {/* Other content specific to the home page */}
      </div>
    </div>
  );
}
}
export default Home 