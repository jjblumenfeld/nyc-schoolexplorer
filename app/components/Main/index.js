import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import Detail from '../Detail';
import styles from '../../Styles';

import SchoolData from '../../data/SE_Schools.json';
import SchoolAccountability from '../../data/SE_Accountability.json';
import SchoolEnrollment from '../../data/SE_Enrollment.json';
import SchoolStaff from '../../data/SE_Staff.json';
import SchoolClassSize from '../../data/SE_Class_Size.json';

export default class Main extends Component {
  constructor(props) {
    super(props);

    SchoolData.sort(function(schoolA, schoolB) {
      return schoolA.SCHOOL_NAME.localeCompare(schoolB.SCHOOL_NAME);
    });

    this.schoolDataSource = new ListView.DataSource({
      rowHasChanged: (originalRow, newRow) => originalRow !== newRow
    });

    this.state = {
      schoolDataList: this.schoolDataSource.cloneWithRows(SchoolData),
      searchName: '',
      isLoading: false,
    };
  }

  handleSearchChange(event) {
    let searchText = event.nativeEvent.text;
    let filterRegex = new RegExp('.*' + searchText + '.*', 'gi');
    this.setState({
      schoolDataList: this.schoolDataSource.cloneWithRows(
        SchoolData.filter(function(element) {
          return filterRegex.exec(element.SCHOOL_NAME);
        })
      ),
      searchName: searchText
    });
  }

  handleSchoolSelected(schoolId) {
    this.state.isLoading = true;
    let selectedSchool = SchoolStaff.find(function(element) {
      return element.ENTITY_CD === schoolId;
    });

    let selectedSchoolEnroll = SchoolEnrollment.filter(function(element) {
      return element.ENTITY_CD === schoolId;
    });

    let selectedSchoolAccountability = SchoolAccountability.filter(function(
      element
    ) {
      return element.ENTITY_CD === schoolId;
    });

    let selectedSchoolClassSize = SchoolClassSize.filter(function(element) {
      return element.ENTITY_CD === schoolId;
    });


    this.props.navigator.push({
      title: selectedSchool.SCHOOL_NAME,
      component: Detail,
      passProps: {
        schoolInfo: selectedSchool,
        schoolEnrollment: selectedSchoolEnroll,
        schoolAccountability: selectedSchoolAccountability,
        schoolClassSize: selectedSchoolClassSize,
      }
    });
  }
  getListItemBackgroundStyle(rowId) {
    return rowId % 2 ? styles.listItemEven : styles.listItemOdd;
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Find an NYC Middle School
        </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.searchName}
          onChange={this.handleSearchChange.bind(this)}
        />
        <ListView
          automaticallyAdjustContentInsets={false}
          style={styles.list}
          dataSource={this.state.schoolDataList}
          renderRow={(rowData, sectionID, rowID) => (
            <TouchableHighlight
              style={(styles.listitem, this.getListItemBackgroundStyle(rowID))}
              onPress={() => this.handleSchoolSelected(rowData.ENTITY_CD)}
            >
              <Text style={styles.listItem}>
                {rowData.SCHOOL_NAME}
              </Text>
            </TouchableHighlight>
          )}
        />
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large"></ActivityIndicator>
      </View>
    );
  }
}
