import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class SchoolDetail extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.schoolData)}</Text>
      </View>
    );
  }
}
import SchoolDetails from '../../data/SE_Accountability.json';
