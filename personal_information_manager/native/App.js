import React from 'react';
import {Text, View, ScrollView, Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notes from './components/Notes'
import LogoBar from './components/LogoBar/LogoBar';
import Todo from './components/Todo/Todo';
import Events from './components/Events/Events';
import {styles} from './styles';

/*Notes view with corresponding components*/
const NotesScreen = () => (
  <View style={{flex: 1}}>
    <ScrollView>
      <View style={styles.container}>
        <Notes />
      </View>
    </ScrollView>
  </View>
);

/*Todo view with corresponding components*/
const TodoScreen = () => (
  <View style={{flex: 1}}>
    <ScrollView>
      <View style={styles.container}>
        <Todo/>
      </View>
    </ScrollView>
  </View>
);

/*Calendar view with corresponding components*/
const EventsScreen = () => (
  <View style={{flex: 1}}>
    <ScrollView>
      <View style={styles.container}>
        <Events/>
      </View>
    </ScrollView>
  </View>
);

/*Navigation options for the "Todo" tab*/
TodoScreen.navigationOptions = {
  header: <LogoBar/>,
  tabBarLabel: 'Todo',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-checkbox' : 'ios-checkbox-outline'}
      size={26}
      style={{color: focused ? '#0092ff' : '#9b9b9b'}}
    />
  )
};

/*Navigation options for the "Notes" tab*/
NotesScreen.navigationOptions = {
  header: <LogoBar/>,
  tabBarLabel: 'Notes',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
      size={26}
      style={{color: focused ? '#0092ff' : '#9b9b9b'}}
    />
  )
};

/*Navigation options for the "Calendar" tab*/
EventsScreen.navigationOptions = {
  header: <LogoBar/>,
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
      size={26}
      style={{color: focused ? '#0092ff' : '#9b9b9b'}}
    />
  )
};

/*Routing using react-navigation*/
const App =  StackNavigator({
   MyTab: {
     screen: TabNavigator(
       {
         Calendar: {
           screen: EventsScreen,
           path: 'calendar',
         },
         Todo: {
           screen: TodoScreen,
           path: 'todo',
         },
         Notes: {
           screen: NotesScreen,
           path: 'notes',
         }
       },
       {
         tabBarPosition: 'bottom',
         swipeEnabled: true,
         animationEnabled: true,
         tabBarOptions: {
           activeTintColor: Platform.OS === 'ios' ? '#0092ff' : '#fff',
           style: {backgroundColor: '#343A40'}
         }
       }
     ),
     navigationOptions: { title: 'Header title' }
  }
})

export default App;
