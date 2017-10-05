import React, { Component } from "react";
import Note from './Note';
import AddNote from './AddNote';
import NoteModal from './NoteModal';
import {storeItem, loadFromLocalStorage} from '../../localStorage';

class Calender extends Component{
  constructor(props) {
    super(props);
    var prevState = loadFromLocalStorage("notes", {modalOpen: false, id: 0, notes: []});
    prevState.modalOpen = false;
    this.state = prevState;

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(note) {
    console.log(note);
    var notes = this.state.notes;
    notes.unshift(note);

    this.setState(
      {
        id: this.state.id + 1,
        notes: notes
      }
    );

    storeItem('notes', this.state);
    this.closeModal();
  }

  handleDelete(idToDelete){
    let notes = this.state.notes.filter(aNote => aNote.id !== idToDelete);
    this.setState({notes: notes});
    storeItem('notes', this.state);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render(){

    const notes = this.state.notes.map( note => {
      return <Note key={note.id} id={note.id} title={note.title} body={note.body} handleDelete={this.handleDelete} />
    });

    console.log(notes);

    return(
      <section id="notes">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notes</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <NoteModal id={this.state.id+1} open={this.state.modalOpen} handleClose={this.closeModal} handleSubmit={this.handleSubmit}/>
              <div className="notesContainer">
                <AddNote handleClick={this.openModal}/>
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
