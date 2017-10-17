import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Badge } from 'react-native-elements';
import Dimensions from 'Dimensions';


class Notifications extends Component{

  constructor(props) {
    super(props);
    this.state = {
      notis: 3,
      notificationsTest: ["Do something", "Go fishing", "Cycle to Hell", "Buy a trampoline", "Buy new shoes", "Pay for the tickets last soccer match", "Work on react native"]
    };
    this.mapNotification = this.mapNotification.bind(this);
  }

  mapNotification(){
    return this.state.notificationsTest.map(function(noti, i){
      return(
        <View key={i} style={styles.ul}>
          <Text style={{fontWeight:'300'}}>&bull; {noti}</Text>
        </View>
      );
    });
  }

  render(){
    styles = {
      container:{
        flex: 1,
        marginTop: 20,
      },
      header:{
        flexDirection: 'row'
      },
      h2:{
        color: '#000',
        fontSize:22,
        fontWeight: '300',
      },
      ul:{
        marginTop:10,
        marginBottom: 10,
        marginLeft: 10,
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h2}>Notfications:</Text>
          <Badge
            value={this.state.notis}
            textStyle={{ color: '#fff', fontSize:12, fontWeight:'500' }}
            containerStyle={{ backgroundColor: '#0092ff', marginTop:3, marginLeft:7}}>
          </Badge>
        </View>
        <View style={{marginTop:10}}>
          {this.mapNotification()}
        </View>
      </View>
    );
  }

}
export default Notifications;
