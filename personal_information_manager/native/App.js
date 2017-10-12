import React from 'react';
import {StyleSheet, View} from 'react-native';
import Todo from './components/Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Todo/>
    </View>
  );
};

export default App;
