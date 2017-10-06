import React, { Component } from "react";
import Note from './Note';
import AddNote from './AddNote';
import NoteModal from './NoteModal';
import {storeItem, loadFromLocalStorage} from '../../localStorage';

class Calender extends Component{
  constructor(props) {
    super(props);
    const emptyState = {
      modalIsOpen: false, 
      notes: []
    }
    const loadedState = loadFromLocalStorage('notes', emptyState);
    
    this.state = {
      ...loadedState,
      modalOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  handleSubmit(note) {
    note.title = this.capitalize(note.title);
    note.body = this.capitalize(note.body);
    const notes = [note, ...this.state.notes];
    this.setState({notes: notes, modalOpen: false}, () => storeItem('notes', this.state));
  }

  handleDelete(idToDelete){
    let notes = this.state.notes.filter((aNote) => aNote.id !== idToDelete);
    this.setState({notes: notes}, () => storeItem('notes', { notes: notes }));
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
    const notes = this.state.notes.map(note => 
      <Note key={note.id} 
            id={note.id} 
            title={note.title} 
            body={note.body} 
            handleDelete={this.handleDelete} />
    );

    const noteId = new Date().getTime()
    return(
      <section id="notes">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notes</h2>

              <blockquote className="blockquote">
                <p className="mb-0">He listens well who takes notes</p>
                <footer className="blockquote-footer">
                  <cite>Dante Alighieri</cite>
                </footer>
              </blockquote>

              <NoteModal id={noteId} 
                  open={this.state.modalOpen}
                  handleClose={this.closeModal}
                  handleSubmit={this.handleSubmit} />
              <div className="notesContainer">
                <AddNote handleClick={this.openModal} />
                {notes}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calender;
