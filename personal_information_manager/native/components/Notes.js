import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import NotesList from './NotesList';
import AddNote from './AddNote';
import {storeItem, getNotes} from '../asyncStorage';

class Notes extends Component {
  constructor(props){
    super(props);

    //this.state = {notes: getNotes()};
    this.state = {
      page: 'notesList',
      notes: [
        {
          id: 0,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }, 
        {
          id: 1,
          text: "Note 2"
        }, 
        {
          id: 3,
          text: "Note 3"
        }]
    };

    this.onSubmitNote = this.onSubmitNote.bind(this);
    this.showAddNote = this.showAddNote.bind(this);
  }

  onSubmitNote(note) {
    this.setState({
      page: 'notesList',
      notes: [note, ...this.state.notes],
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
        case 'notesList': return <NotesList onClick={this.showAddNote} notes={this.state.notes}/>;
        case 'addNote': return <AddNote onSubmit={this.onSubmitNote} />;
        default: return <Text>Error</Text>
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