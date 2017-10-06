import React, {Component} from 'react';
import Modal from 'react-modal';

class NoteModal extends Component { 
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const title = e
    .target
    .querySelector('input[id="title"]')
    .value;

    const body = e
    .target
    .querySelector('textarea[id="body"]')
    .value;

    const note = {
      id: this.props.id, 
      title: title,
      body: body
    }

    this.props.handleSubmit(note);
  }

  render() {
    const modalStyles = {
      overlay: {
        zIndex: 10
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : "#1CC5D4",
        color                 : "white"
      }
    };

    return (
    
      <Modal 
        style={modalStyles} 
        isOpen={this.props.open}
        onRequestClose={this.props.handleClose} >
          <form action="#notes" id="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" id="title" placeholder="Enter title" />
            </div>
            <div className="form-group">
              <textarea type="text" className="form-control" id="body" rows="2" placeholder="Enter note" />
            </div>
            <input type="submit" value="Add" className="btn btn-default"/>
          </form>
      </Modal>
    );
  }
}

export default NoteModal; 