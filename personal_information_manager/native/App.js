import React from 'react';
import {StyleSheet, Text, View, ScrollView, Platform} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogoBar from './components/LogoBar'
import Todo from './components/Todo'
import Header from './components/Header'
import Notifications from './components/Notifications'


/*Simple stylesheet for App-content*/
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
});


/*Notfication view with corresponding components*/
const NotifierScreen = ({navigation}) => (
    <View style={{flex: 1}}>
      <LogoBar/>
      <ScrollView>
        <Header/>
        <View style={styles.container}>
          <Notifications/>
        </View>
      </ScrollView>
    </View>
  );


  /*Notes view with corresponding components*/
  const NotesScreen = ({ navigation }) => (
      <View style={{flex: 1}}>
        <LogoBar/>
        <ScrollView>
          <View style={styles.container}>
              <Todo/>
          </View>
        </ScrollView>
      </View>
  );

  /*Todo view with corresponding components*/
  const TodoScreen = ({ navigation }) => (
      <View style={{flex: 1}}>
        <LogoBar/>
        <ScrollView>
          <View style={styles.container}>
              <Todo/>
          </View>
        </ScrollView>
      </View>
    );

/*Navigation options for the "Notifier" tab*/
NotifierScreen.navigationOptions = {
  tabBarLabel: 'Notifier',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
      size={26}
      style={{ color: focused ? '#0092ff' : '#9b9b9b'}}
    />
  ),
};

/*Navigation options for the "Todo" tab*/
TodoScreen.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-checkbox' : 'ios-checkbox-outline'}
      size={26}
      style={{color: focused ? '#0092ff' : '#9b9b9b'}}
    />
  ),
};

/*Navigation options for the "Notes" tab*/
NotesScreen.navigationOptions = {
  tabBarLabel: 'Notes',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
      size={26}
      style={{color: focused ? '#0092ff' : '#9b9b9b'}}
    />
  ),
};

/*Routing using react-navigation*/
const App = TabNavigator(
  {
    Notifier: {
      screen: NotifierScreen,
      path: '',
    },
    Todo: {
      screen: TodoScreen,
      path: 'todo',
    },
    Notes: {
      screen: NotesScreen,
      path: 'notes',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#0092ff' : '#fff',
      style: {
        backgroundColor: '#343A40'
      }
    },
  }
);

export default App;
