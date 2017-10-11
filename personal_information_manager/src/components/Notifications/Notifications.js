import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({notis}) => {
  return (
    <section id="notifications">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Notfications</h2>
            <kbd>{new Date().toDateString()}</kbd>
            <ul>
              {notis.map((e, i) =>
                <li key={i}><span className="badge badge-danger" id="liBadge">{i+1} </span>{e.title}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Notifications.propTypes = {
  notis: PropTypes.array
};

export default Notifications;
