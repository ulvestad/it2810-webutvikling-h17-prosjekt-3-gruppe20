import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableHighlight} from 'react-native';

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
    const styles = {
      notes: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      note: {
        flex: 0,
        width: 120,
        height: 120,
        margin: 20,
        padding: 5,
        backgroundColor: '#343A40',
      },
      h2: {
        fontSize: 22,
        fontWeight: '300',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
      }
    }

    
    const notes = this.props.notes.map(note =>
      <TouchableHighlight key={note.id} id={note.id} onPress={(e) => this.props.handleNoteClick(note)}> 
        <View  style={styles.note}>  
          <Text style={{fontSize: 20, color: '#fff',}}>
            { this.limitTest(note.text) }
          </Text>
        </View>
      </TouchableHighlight>);

    const defaultMessage = <Text style={styles.h2}>Your notes will be shown here</Text>;
    return (
      <View>
        <View>
            <Button title="Add note" onPress={(e) => this.props.handleAddClick()}/>
        </View>
    
        <View flexDirection='row' flexWrap='wrap' style={styles.notes}>
            { notes.length ? notes : defaultMessage }
        </View>
      </View>
    );
  }
}

export default NotesList;
