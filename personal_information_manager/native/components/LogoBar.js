import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableHighlight, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343A40',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 110,
    height: 35,
    marginTop: 5,
    marginBottom: -4,
  },
});

const LogoBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <Image style={styles.img} source={require('./../img/logo.png')} />
    </View>
  );
};

export default LogoBar;
