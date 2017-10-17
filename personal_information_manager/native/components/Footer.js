
/*Depricated, NOT in use*/

import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';

class Footer extends Component{

  constructor(props) {
   super(props);
   this.state = {
     deviceDimensions: Dimensions.get('screen').width,
     page: 'notifier'
   }
   this.onPressNotiButton = this.onPressNotiButton.bind(this);
   this.onPressTodoButton = this.onPressTodoButton.bind(this);
   this.onPressNotesButton = this.onPressNotesButton.bind(this);

   /*Event Listener for orientation changes*/
    Dimensions.addEventListener('change', () => {
        this.setState({
            deviceDimensions: Dimensions.get('screen').width
        });
    });
 }

  onPressNotiButton(){
    this.setState({page: 'notifier'});
  }

  onPressTodoButton(){
    this.setState({page: 'todo'});
  }

  onPressNotesButton(){
    this.setState({page: 'notes'});
  }

  render(){
    var styles = {
      container: {
        backgroundColor: '#343A40',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
      },
      text: {
        color: '#0092ff',
        fontSize: 17,
        paddingRight: this.state.deviceDimensions*0.07,
        paddingLeft: this.state.deviceDimensions*0.07,
      },
      divider: {
        color: '#0092ff'
      },
      highlight: {
        color: '#cccccc',
        fontSize: 17,
        paddingRight: this.state.deviceDimensions*0.07,
        paddingLeft: this.state.deviceDimensions*0.07,
      }
    };
    return (
      <View>
        {(() => {
                  switch(this.state.page) {
                      case 'notifier':
                          return <View style={styles.container}>
                            <TouchableHighlight onPress={this.onPressNotiButton}>
                            <Text style={styles.highlight}>Notifier</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressTodoButton}>
                            <Text style={styles.text}>Todo</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressNotesButton}>
                            <Text style={styles.text}>Notes</Text>
                            </TouchableHighlight>
                          </View>;
                      case 'todo':
                          return <View style={styles.container}>
                            <TouchableHighlight onPress={this.onPressNotiButton}>
                            <Text style={styles.text}>Notifier</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressTodoButton}>
                            <Text style={styles.highlight}>Todo</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressNotesButton}>
                            <Text style={styles.text}>Notes</Text>
                            </TouchableHighlight>
                          </View>;
                      case 'notes':
                          return <View style={styles.container}>
                            <TouchableHighlight onPress={this.onPressNotiButton}>
                            <Text style={styles.text}>Notifier</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressTodoButton}>
                            <Text style={styles.text}>Todo</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressNotesButton}>
                            <Text style={styles.highlight}>Notes</Text>
                            </TouchableHighlight>
                          </View>;
                      default:
                          return <View style={styles.container}>
                            <TouchableHighlight onPress={this.onPressNotiButton}>
                            <Text style={styles.text}>Notifier</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressTodoButton}>
                            <Text style={styles.text}>Todo</Text>
                            </TouchableHighlight>
                            <Text style={styles.divider}>|</Text>
                            <TouchableHighlight onPress={this.onPressNotesButton}>
                            <Text style={styles.text}>Notes</Text>
                            </TouchableHighlight>
                          </View>;
                  }
        })()}
      </View>
    );
  }
}

export default Footer;
