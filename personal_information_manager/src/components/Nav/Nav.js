import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isFirstVisitOfDay } from '../../localStorage'

class Nav extends Component{
  constructor(props){
    super(props)
    this.state = {
      isVisible: true
    }

    this.updateNotificationBadge = this.updateNotificationBadge.bind(this)
  }

  /* Updates the notis badge */
  updateNotificationBadge(e){
    /* Ble kanskje ikke helt riktig */
    this.setState({
      isVisible: isFirstVisitOfDay()
    })
  }

  render(){
    const isVisible = this.state.isVisible
    const quantity = this.props.notis.length
    let badge = null
    //TODO update number when new appoitnmets are made 
    if(isVisible && quantity > 0){
      badge = <Link to='/notification' onClick={this.updateNotificationBadge}> Notfications <span className="badge badge-danger">{quantity}</span></Link>
    }else{
      badge = <Link to='/notfications'>Notfications</Link>
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
             <li className="nav-item nav-link"> <Link to='/calender'> Calender </Link></li>
             <li className="nav-item nav-link"> <Link to='/notes'> Notes </Link></li>
             <li className="nav-item nav-link"> <Link to='/todo'> Todo </Link></li>
             <li className="nav-item nav-link"> {badge}</li>
           </ul>
         </div>
       </div>
      </nav>
    )
  }
}

export default Nav
