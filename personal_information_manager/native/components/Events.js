import React, { Component } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

class Events extends Component{
  render(){
    const calendar = <Calendar
      current={Date()}
      minDate={Date()}
      monthFormat={'yyyy MM'}
    />;
    return (
      <View>{calendar}</View>
    );
  }
}
export default Events;
