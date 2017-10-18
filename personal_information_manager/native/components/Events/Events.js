import React from 'react';
import {View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {styles} from './styles';

const Events = () => {
  const calendar = <Calendar
    current={Date()}
    minDate={Date()}
    monthFormat={'MMMM yyyy'}
  />;
  return <View><Text style={styles.h1}>Calendar</Text>{calendar}</View>;
};

export default Events;
