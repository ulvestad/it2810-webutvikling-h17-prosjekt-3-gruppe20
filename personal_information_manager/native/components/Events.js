import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

const Events = () => {
  const styles = StyleSheet.create({
    h1: {
      fontSize: 30,
      fontWeight: '300',
      marginBottom: 10,
      textAlign: 'center'
    }
  });
  const calendar = <Calendar
    current={Date()}
    minDate={Date()}
    monthFormat={'MMMM yyyy'}
  />;
  return <View><Text style={styles.h1}>Calendar</Text>{calendar}</View>;
};

export default Events;
