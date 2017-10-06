import React, {Component} from 'react';

class Note extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    this.props.handleDelete(this.props.id); 
  }
  
  render() {
    return (
      <div className="panel panel-default note">
        <div className="panel-heading note-heading">
          <button type="button" className="close" aria-label="Close" onClick={this.handleDelete}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h3 className="panel-title">
            {this.props.title}
          </h3>
        </div>
        <div className="panel-body">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Note;