import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import NotesList from './NotesList';
import AddNote from './AddNote';
import {storeItem, getNotes} from '../asyncStorage';

class Notes extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 'notesList',
      note: '',
      notes: []
    };

    this.onSubmitNote = this.onSubmitNote.bind(this);
    this.showAddNote = this.showAddNote.bind(this);
    this.handleNoteClick = this.handleNoteClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    getNotes((res) => { 
      console.log('res:', res);
      this.setState({notes: res });
    })
  }

  handleNoteClick(note) {
    console.log('handleNoteClick', note);
    this.setState({note: note});
    this.showAddNote()
  }

  onSubmitNote(note) {
    const oldNotes = this.state.notes.filter(aNote => aNote.id !== note.id);
    
    this.setState({
      note: '',
      page: 'notesList',
      notes: [note, ...oldNotes],
    }, () => {
      storeItem('notes', this.state.notes)
    });
  }

  onDelete(id) {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);
    
    this.setState({
      notes: filteredNotes,
      page: 'notesList'
    }, () => {
      storeItem('notes', this.state.notes)
    });
  }

  showAddNote(){
    this.setState({page: 'addNote'});
  }

  render() {
    const styles = {
      container: {
        flex: 1,
      },
      noteContainer: {
        padding: 10,
        borderTopWidth: 1
      }
    };

    const page = () => { 
      switch(this.state.page) {
        case 'notesList': {
          console.log('Notes: ' + this.state.notes);
          return <NotesList handleNoteClick={this.handleNoteClick} handleAddClick={this.showAddNote} notes={this.state.notes} />;
        }
        case 'addNote': {
          return <AddNote onSubmit={this.onSubmitNote} onDelete={this.onDelete} note={this.state.note}/>;
        }
        default: {
          return <Text>Error</Text>;
        }
      };
    }

    return (
      <View style={styles.container}>
        { page() }
      </View>
    );
  }
}

export default Notes;