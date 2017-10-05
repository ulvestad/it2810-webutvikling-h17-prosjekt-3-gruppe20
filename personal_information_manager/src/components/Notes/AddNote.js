import React from 'react';

const AddNote = ({handleClick}) => {
  return (
    <div className="panel panel-default note add-note" onClick={handleClick}>
      <div className="panel-body">
        <i className="fa fa-plus add" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default AddNote;