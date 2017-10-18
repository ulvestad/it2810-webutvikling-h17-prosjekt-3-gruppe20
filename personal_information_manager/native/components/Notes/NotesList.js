import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, Button, ScrollView, TouchableHighlight} from 'react-native';
import {styles} from './styles';

class NotesList extends Component {
  constructor(props){
    super(props);

    this.handleNewNote = this.handleNewNote.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
  }

  handleNewNote(e) {
    this.props.handleAddClick();
  }

  handleEditNote(e) {
    this.props.onEdit(note);
  }

  limitTest(text) {
    if (text.length > 35){
      return text.substring(0,35) + '...'
    } else {
      return text;
    }
  }

  render() {
    const notes = this.props.notes.map(note =>
      <TouchableHighlight key={note.id} id={note.id} onPress={(e) => this.props.handleNoteClick(note)}>
        <View style={styles.note}>
          <Text style={{fontSize: 20, color: '#fff',}}>{this.limitTest(note.text)}</Text>
        </View>
      </TouchableHighlight>);

    const defaultMessage = <Text style={styles.h2}>Your notes will be shown here</Text>;
    return (
      <View>
        <View><Button title="Add note" onPress={(e) => this.props.handleAddClick()}/></View>
        {notes.length ? <View flexDirection='row' flexWrap='wrap' style={styles.notes}>{notes}</View> : defaultMessage}
      </View>
    );
  }
};

NotesList.propTypes = {
  handleAddClick: PropTypes.func,
  onEdit: PropTypes.func,
  notes: PropTypes.array,
  handleNoteClick: PropTypes.func
};

export default NotesList;
