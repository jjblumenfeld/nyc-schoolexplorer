import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  image,
} from 'react-native';

import styles from '../../Styles';

export default class SchoolDetail extends Component{
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          {this.props.schoolInfo.SCHOOL_NAME}
        </Text>
      </View>
    );
  }
}
