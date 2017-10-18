import React, { Component } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

class Events extends Component{
  render(){
    const calendar = <Calendar
      current={Date()}
      minDate={Date()}
      onDayPress={(day) => {console.log('selected day', day)}}
      monthFormat={'yyyy MM'}
      onMonthChange={(month) => {console.log('month changed', month)}}
    />;
    return (
      <View>{calendar}</View>
    );
  }
}
export default Events;
