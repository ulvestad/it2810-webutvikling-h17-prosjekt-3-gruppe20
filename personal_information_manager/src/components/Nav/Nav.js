import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {isFirstVisitOfDay, getNotis} from '../../localStorage'

/**
 * Navbar component.
 */
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notis: getNotis(),
      isVisible: isFirstVisitOfDay()
    };

    this.updateNotificationBadge = this
      .updateNotificationBadge
      .bind(this);
  }

  /* Updates notifications-badge depending of user visist */
  updateNotificationBadge(e) {
    this.setState({isVisible: isFirstVisitOfDay()});
  }

  render() {
    const isVisible = this.state.isVisible;
    const quantity = this.state.notis.length;
    let badge = null;
    if (isVisible && quantity > 0) {
      badge = <span className="badge badge-danger">{quantity}</span>;
    }
    // <li className="nav-item nav-link"> <Link
    // onClick={this.updateNotificationBadge} to='/'> Home {badge} </Link> </li>
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav">
        <div className="container">
          <Link
            className="navbar-brand"
            to='/'
            id="navtext"
            onClick={this.updateNotificationBadge}>
            <img src="/img/logo.png" alt="logo" id="navlogo"/>
            Personal Information Manager {badge}
          </Link>
          <Link className="navbar-brand" to='/' id="navtextToogle"><img src="/img/logo.png" alt="logo" id="navlogoToogle"/></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav-link">
                <Link to='/calender'>
                  Calender
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link to='/todo'>
                  Todo
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link to='/notes'>
                  Notes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  noits: PropTypes.number
}

export default Nav;
