import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import Main from './app/components/Main';

class NYCSchoolExplorerApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'NYC School Explorer'
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07889B',
  }
});

AppRegistry.registerComponent(
  'NYCSchoolExplorerApp',
  () => NYCSchoolExplorerApp
);
