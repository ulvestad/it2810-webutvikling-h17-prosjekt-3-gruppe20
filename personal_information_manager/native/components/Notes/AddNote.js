import React, {Component} from 'react';
import {View, Text, TextInput, Button, ScrollView, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import {storeItem, getNotes} from '../../asyncStorage';
import {styles} from './styles';

class AddNote extends Component {
  constructor(props) {
    super(props);

    const note = this.props.note;

    this.state = {
      text: note ? note.text : '',
      id: note ? note.id : new Date().getTime()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    const note = this.state;
    this.props.onSubmit(note);
  }

  handleDelete(e) {
    this.props.onDelete(this.state.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 10, justifyContent: 'space-between'}} flexDirection='row'>
          <Button title='Delete' onPress={this.handleDelete}/>
          <Button title='Submit' onPress={this.handleSubmit}/>
        </View>
        <View style={styles.inputContainer} keyboardShouldResistTap={true}>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            autoFocus={true}
            multiline={true}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
        </View>
      </View>
    );
  }
};

AddNote.propTypes = {
  note: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func
};

export default AddNote;
