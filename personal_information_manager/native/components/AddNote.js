import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {storeItem, getNotes} from '../asyncStorage';

class AddNote extends Component {
  constructor(props){
    super(props);

    this.state = {text: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log("Create new note!");

    const note = {
      id: new Date().getTime(),
      text: this.state.text
    }

    this.props.onSubmit(note);

  }

  render() {
    const styles = {
      container: {
        flex: 1,
      },
      inputContainer: {
        flex: 1,
      },
      inputField: {
        fontSize: 20,  
      },
    };

    return (
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
            <Button title="Submit" onPress={this.handleSubmit}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            autoFocus={true}
            multiline = {true}
            style={styles.inputField}
          />
        </View>

      </View>
    );
  }
}

export default AddNote;