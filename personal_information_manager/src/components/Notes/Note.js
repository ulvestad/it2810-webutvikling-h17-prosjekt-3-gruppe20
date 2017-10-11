import React from 'react';
import PropTypes from 'prop-types';

const Note = ({id, title, body, handleDelete}) => {
  return (
    <div className="panel panel-default note">
      <div className="panel-heading note-heading">
        <button type="button" 
          className="close" aria-label="Close" 
          onClick={(e) => handleDelete(id)} >
          <span aria-hidden="true">&times;</span>
        </button>
        <h3 className="panel-title">
          {title}
        </h3>
      </div>
      <div className="panel-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  handleDelete: PropTypes.func
}

export default Note;
