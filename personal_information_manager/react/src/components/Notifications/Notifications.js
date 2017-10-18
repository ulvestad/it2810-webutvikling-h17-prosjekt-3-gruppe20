import React, { Component } from 'react';
import { getNotis } from '../../localStorage';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Header/Header.css';
import Header from '../Header/Header.js';

/**
 * Notification component. Get an overview over notifications for given day
 */
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notis: getNotis()
    };
  }

  render() {
    return (
      <div>
        <Header />
        <section id="notifications">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Notfications</h2>
                <kbd>{new Date().toDateString()}</kbd>
                <ul>
                  {this.state.notis.map((e, i) => {
                    return (
                      <li key={i}>
                        <Link to="/calender">
                          <span className="badge badge-danger" id="liBadge">
                            {i + 1}
                          </span>
                          {e.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Notifications.propTypes = {
  notis: PropTypes.array
};

export default Notifications;
