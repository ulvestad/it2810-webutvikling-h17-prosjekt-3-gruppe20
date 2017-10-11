import React from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import Modal from 'react-modal';

const NoteModal = ({id, open, handleClose, handleSubmit}) => {
  const getValueFromInput = (e, component, selector) => {
    const el = e
      .target
      .querySelector(`${component}[id="${selector}"]`);
    return el
      ? el.value
      : '';
  }

  const submit = (e) => {
    e.preventDefault();
    
    const title = getValueFromInput(e, 'input', 'title');
    const body = getValueFromInput(e, 'textarea', 'body')

    const note = {
      id: id,
      title: title,
      body: body
    }

    handleSubmit(note);
  }

  const modalStyles = {
    overlay: {
      zIndex: 10
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#1CC5D4",
      color: "white"
    }
  };

  return (
    <Modal style={modalStyles} isOpen={open} onRequestClose={handleClose}>
      <div>
        <Form action="#notes" id="form" onSubmit={submit.bind(this)}>
          <FormGroup>
            <FormControl type="text" id="title" placeholder="Enter title"/>
          </FormGroup>
          <FormGroup>
            <textarea
              type="text"
              className="form-control"
              id="body"
              rows="2"
              placeholder="Enter note"/>
          </FormGroup>
          <Button type="submit">Add</Button>
        </Form>
      </div>
    </Modal>
  );
}

export default NoteModal;