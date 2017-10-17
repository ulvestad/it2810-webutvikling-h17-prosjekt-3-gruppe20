import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Dimensions from 'Dimensions';

class Header extends Component{

  constructor(props) {
   super(props);
   this.state = {
     deviceDimensions: Dimensions.get('screen').width,
   }

   /*Event Listener for orientation changes*/
    Dimensions.addEventListener('change', () => {
        this.setState({
            deviceDimensions: Dimensions.get('screen').width
        });
    });
  }

  render(){
    styles ={
      container: {
        backgroundColor: '#0092ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -0,
        width: this.state.deviceDimensions,
        paddingTop: 25,
        paddingBottom: 30,
      },
      h:{
        color: '#fff',
        fontSize: 25,
        marginBottom: 15,
        fontWeight: '300',
        textAlign: 'center'
      },
      lead:{
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '300',
      }
    };
    return (
      <View style={styles.container}>
          <Text style={styles.h}>Welcome to the Personal Information Manager</Text>
          <Text style={styles.lead}>This app helps to keep your personal information organized in a practical way.</Text>
      </View>
    );
  }

}
export default Header;
