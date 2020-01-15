import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import HomeScreen from './screens/Home';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    paddingTop: 40,
    paddingLeft: 40,
    fontSize: 31,
  },
});
