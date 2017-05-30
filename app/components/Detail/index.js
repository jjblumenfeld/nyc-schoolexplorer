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
  constructor(props) {
    super(props);
    let basicInfo = [{
      title: 'Principal',
      key: 'CSO_NAME',
    }, {
      title: 'District',
      key: 'DISTRICT_NAME',
    }, {
      title: 'Phone',
      key: 'PHONE',
    }, {
      title:'Address',
      key: 'STREET',
    }];


    this.viewDS = new ListView.DataSource({
      rowHasChanged: (originalRow, newRow) => originalRow !== newRow
    });

    this.state = {
      viewDS: this.viewDS.cloneWithRows(basicInfo),
    };
  }

  render() {
    let schoolInfo = this.props.schoolInfo;
    return (
      <View style={styles.mainContainer}>
        <ListView
          style={styles.mainContent}
          contentContainerStyle={styles.infoListWrapper}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.viewDS}
          renderRow={(rowData, sectionID, rowID) => (
          <View style={styles.infoListItem}>
            <Text style={styles.infoListItemLabel}>{rowData.title}</Text>
            <Text style={styles.infoListItemValue}>{schoolInfo[rowData.key]}</Text>
          </View>
          )}
        />
      </View>
    );
  }
}
