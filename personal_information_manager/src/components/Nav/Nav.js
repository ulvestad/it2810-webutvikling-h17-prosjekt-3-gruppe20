import React, { Component } from 'react';
import { isFirstVisitOfDay } from '../../localStorage'

class Nav extends Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: true
    };

    this.updateNotificationBadge = this.updateNotificationBadge.bind(this);
  }

  /* */
  updateNotificationBadge(e){
    /* Ble kanskje ikke helt riktig */
    this.setState({
      isVisible: isFirstVisitOfDay()
    });
  }

  render(){
    const isVisible = this.state.isVisible;
    const quantity = this.props.notis.length
    let badge = null;
    //TODO update number when new appoitnmets are made 
    if(isVisible && quantity > 0){
      badge = <a className="nav-link js-scroll-trigger" onClick={this.updateNotificationBadge} href="#notifications">Notfications <span className="badge badge-danger">{quantity}</span></a>;
    }else{
      badge = <a className="nav-link js-scroll-trigger" href="#notifications">Notfications</a>;
    }
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
               {badge}
             </li>
           </ul>
         </div>
       </div>
      </nav>
    );
  }
}

export default Nav;
