import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import {storeItem, getNotes} from '../asyncStorage';

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
    console.log('delete note:' + this.state.id);
    this.props.onDelete(this.state.id);
  }

  render() {
    const styles = {
      container: {
        flex: 1
      },
      inputContainer: {
        flex: 1
      },
      inputField: {
        fontSize: 20
      }
    };

    return (
      <View style={styles.container}>
        <View
          style={{
          marginBottom: 10,
          justifyContent: 'space-between'
        }}
          flexDirection='row'>
          <Button title="Delete" onPress={this.handleDelete}/>
          <Button title="Submit"
            onPress={this.handleSubmit} />
        </View>

        <View style={styles.inputContainer} keyboardShouldResistTap={true}>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            autoFocus={true}
            multiline={true}
            style={styles.inputField}
            underlineColorAndroid='rgba(0,0,0,0)' />
        </View>

      </View>
    );
  }
}

export default AddNote;