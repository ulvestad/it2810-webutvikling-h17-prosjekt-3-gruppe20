import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import {styles} from './styles';

const LogoBar = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
        <Image style={styles.img} source={require('../../img/logo.png')} />
    </View>
  );
};

export default LogoBar;
