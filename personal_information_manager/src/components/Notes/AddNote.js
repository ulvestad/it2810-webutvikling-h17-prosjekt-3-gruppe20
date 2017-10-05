import React from 'react';

const AddNote = ({handleClick}) => {
  return (
    <div className="panel panel-default note add-note" onClick={handleClick}>
        <span className="glyphicon glyphicon-plus add" />
    </div>
  );
}

export default AddNote;