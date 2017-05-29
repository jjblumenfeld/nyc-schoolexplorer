import React, { Component } from 'react';
import { NavigatorIOS, View, Text, StyleSheet, Platform } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
export default class NYCSchoolExplorerApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'NYC School Explorer',
      }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
});
