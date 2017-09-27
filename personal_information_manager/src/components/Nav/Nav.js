import React, { Component } from 'react';

class Nav extends Component{
  render(){
    return(
      //Navigation using bootstrap4
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
       <div className="container">
         <a className="navbar-brand js-scroll-trigger" href="#page-top" id="navtext"><img src="/img/logo.png" alt="logo" id="navlogo"/>Personal Information Manager</a>
         <a className="navbar-brand js-scroll-trigger" href="#page-top" id="navtextToogle"><img src="/img/logo.png" alt="logo" id="navlogoToogle"/></a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarResponsive">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="#calender">Calender</a>
             </li>
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="#notes">Notes</a>
             </li>
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="#todo">Todo</a>
             </li>
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="#notifications">Notfications <span className="badge badge-danger">2</span></a>
             </li>
           </ul>
         </div>
       </div>
      </nav>
    );
  }
}

export default Nav;
