import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Detail from '../Detail';

import SchoolData from '../../data/SE_Schools.json';

class Main extends Component {
  constructor(props) {
    super(props);
    this.schoolDataSource = new ListView.DataSource({
      rowHasChanged: (originalRow, newRow) => originalRow !== newRow
    });

    this.state = {
      schoolDataList: this.schoolDataSource.cloneWithRows(SchoolData),
      searchName: ''
    };
  }

  handleSearchChange(event) {
    let searchText = event.nativeEvent.text;
    let filterRegex = new RegExp('.*' + searchText + '.*', 'gi');
    this.setState({
      schoolDataList: this.schoolDataSource.cloneWithRows(
        SchoolData.filter(function(element) {
          return filterRegex.exec(element.ENTITY_NAME);
        })
      ),
      searchName: searchText
    });
  }

  handleSchoolSelected(schoolId) {
    let selectedSchool = SchoolData.find(function(element) {
      return element.ENTITY_CD === schoolId;
    });

    this.props.navigator.push({
      title: selectedSchool.ENTITY_NAME,
      component: Detail,
      passProps: { schoolData: selectedSchool }
    });
  }
  getListItemBackgroundStyle(rowId) {
    return (rowId % 2) ? styles.listItemEven : styles.listItemOdd;
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
          renderRow={ (rowData, sectionID, rowID) => (
            <TouchableHighlight
              style={styles.listitem, this.getListItemBackgroundStyle(rowID)}
              onPress={() => this.handleSchoolSelected(rowData.ENTITY_CD)}
            >
              <Text style={styles.listItem}>
                {rowData.ENTITY_NAME}
              </Text>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  list: {
    marginTop: 12,
    paddingTop: 0
  },
  listItem: {
    padding: 3,
    marginBottom: 2,
    marginLeft: 2,
    color: '#d1d1d1'
  },
  listItemEven: {
    //backgroundColor: '#6ab7c3',
  },
  listItemOdd: {

  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  }
});

module.exports = Main;
