import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import NotesList from './NotesList';
import AddNote from './AddNote';
import {storeItem, getNotes} from '../../asyncStorage';
import {styles} from './styles';

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
    getNotes((res) => this.setState({notes: res }));
  }

  handleNoteClick(note) {
    this.setState({note: note});
    this.showAddNote()
  }

  onSubmitNote(note) {
    if (note && note.text != '') {
      const oldNotes = this.state.notes.filter(aNote => aNote.id !== note.id);

      this.setState({
        note: '',
        page: 'notesList',
        notes: [note, ...oldNotes],
      }, () => {
        storeItem('notes', this.state.notes)
      });
    } else {
      this.setState({page: 'notesList'});
    }
  }

  onDelete(id) {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);

    this.setState({
      page: 'notesList',
      note: '',
      notes: filteredNotes,
    }, () => {
      storeItem('notes', this.state.notes)
    });
  }

  showAddNote(){
    this.setState({page: 'addNote'});
  }

  render() {
    const page = () => {
      switch(this.state.page) {
        case 'notesList': {
          return <NotesList handleNoteClick={this.handleNoteClick} handleAddClick={this.showAddNote} notes={this.state.notes} />;
        }
        case 'addNote': {
          return <AddNote onSubmit={this.onSubmitNote} onDelete={this.onDelete} note={this.state.note}/>;
        }
        default: {
          return <Text>Error</Text>;
        }
      };
    };

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Notes</Text>
        { page() }
      </View>
    );
  }
};

export default Notes;
