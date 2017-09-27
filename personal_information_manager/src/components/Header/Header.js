import React, { Component } from "react";

class Header extends Component{
  render(){
    return(
      <header id="page-top" className="bg-primary text-white">
        <div className="container text-center">
          <h2>Welcome to the Personal Information Manager</h2>
          <p className="lead">Using bootstrap for fresh design and max responsivnessss.</p>
        </div>
      </header>
    );
  }
}

export default Header;
