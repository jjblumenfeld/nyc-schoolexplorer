import React, { Component } from 'react';
import { NavigatorIOS, View, Text, StyleSheet, Platform } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
export default class NYCSchoolExplorerApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
          <View style={styles.content}>
            <NavigatorIOS
              initialRoute={{
                component: Main,
                title: 'NYC School Explorer',
            }} />
          </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1,
    backgroundColor: '#07889B',
  }
});
