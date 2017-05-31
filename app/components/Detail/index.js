import React, { Component } from 'react';

import { StyleSheet, Text, TextInput, View, ListView, FlatList, image } from 'react-native';

import PhoneNumber from '../PhoneNumber';
import styles from '../../Styles';
import API from '../../API';

export default class SchoolDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolNotes: ''
    }
  }

  componentWillMount() {
    API.getNotes(this.props.schoolInfo.ENTITY_CD).then((note) =>{
      this.setState({
        schoolNotes: note
      });
    });
  }

  notesUpdate(event) {
    let text = event.nativeEvent.text;
    this.setState({
      schoolNotes: text
    });
    API.setNote(this.props.schoolInfo.ENTITY_CD, text);
  }

  render() {
    let schoolInfo = this.props.schoolInfo;
    let schoolEnrollment = this.props.schoolEnrollment;
    let schoolClassSize = this.props.schoolClassSize;
    let schoolAccountability = this.props.schoolAccountability;
    let avgClassSize = 0;
    let classRoomCount = 0;

    ['MATH', 'SS', 'ENGLISH', 'SCI'].forEach(function(classRoom) {
      let avgClassRoomSize = schoolClassSize['GRADE_8_' + classRoom];
      if (avgClassRoomSize) {
        classRoomCount++;
        avgClassSize += avgClassRoomSize;
      }
    });
    avgClassSize = avgClassSize
      ? Math.round(avgClassSize / classRoomCount)
      : avgClassSize;

    let mathAccountability = schoolAccountability.find(function(item) {
      return item.ACCOUNTABILITYMEASURE === 'Elementary/Middle-Level Math';
    }) || {
      ACCOUNTABILITYMEASURE: 'Elementary/Middle-Level Math',
      MET_PERF: ''
    };

    let elaAccountability = schoolAccountability.find(function(item) {
      return item.ACCOUNTABILITYMEASURE === 'Elementary/Middle-Level ELA';
    }) || {
      ACCOUNTABILITYMEASURE: 'Elementary/Middle-Level ELA',
      MET_PERF: ''
    };

    let sciAccountability = schoolAccountability.find(function(item) {
      return item.ACCOUNTABILITYMEASURE === 'Elementary/Middle-Level Science';
    }) || {
      ACCOUNTABILITYMEASURE: 'Elementary/Middle-Level Science',
      MET_PERF: ''
    };

    return (
      <View style={styles.mainContainer}>
        <View style={styles.mainContent}>

          <View style={styles.infoListWrapper}>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>Principal</Text>
              <Text
                style={[
                  styles.infoListItemValue,
                ]}
              >
                {schoolInfo.CSO_NAME}
              </Text>
            </View>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>District</Text>
              <Text style={styles.infoListItemValue}>
                {schoolInfo.DISTRICT_NAME}
              </Text>
            </View>
          </View>

          <View style={styles.infoListWrapper}>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>Phone</Text>
              <PhoneNumber
                style={styles.infoListItemValue}
                phone={schoolInfo.PHONE}
              />
            </View>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>Address</Text>
              <Text style={styles.infoListItemValue}>
                {schoolInfo.STREET}{'\n'}
                {schoolInfo.CITY}, NY
              </Text>
            </View>
          </View>

          <View style={styles.infoListWrapper}>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>Grade Range</Text>
              <Text style={styles.infoListItemValue}>
                {schoolInfo.GRADE_RANGE}
              </Text>
            </View>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>Total Enrollment</Text>
              <Text style={styles.infoListItemValue}>
                <Text>
                  {schoolEnrollment.ENROLLMENT_6 +
                    schoolEnrollment.ENROLLMENT_7 +
                    schoolEnrollment.ENROLLMENT_8}
                </Text>
              </Text>
            </View>
          </View>

          <View style={[styles.infoListWrapper, {
              borderBottomWidth: 0,
              paddingBottom: 2,
              marginBottom: 0,
          }]}>
            <View style={[styles.infoListItem, , { marginBottom: 2 }]}>
              <Text style={styles.infoListItemLabel}>Avg Class Size</Text>
              <Text style={styles.infoListItemValue}>
                {avgClassSize || 'n/a'}
              </Text>
            </View>
          </View>

          <View style={styles.infoListWrapper}>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>Math</Text>
              <Text style={styles.infoListItemValue}>
                {schoolClassSize.GRADE_8_MATH || 'n/a'}
              </Text>
            </View>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>English</Text>
              <Text style={styles.infoListItemValue}>
                {schoolClassSize.GRADE_8_ENGLISH || 'n/a'}
              </Text>
            </View>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>Science</Text>
              <Text style={styles.infoListItemValue}>
                {schoolClassSize.GRADE_8_SCI || 'n/a'}
              </Text>
            </View>
            <View style={[styles.infoListItem, { marginRight: 0 }]}>
              <Text style={styles.infoListItemLabel}>Soc. Studies</Text>
              <Text style={styles.infoListItemValue}>
                {schoolClassSize.GRADE_8_SS || 'n/a'}
              </Text>
            </View>
          </View>

          <View style={[styles.infoListWrapper, {
              borderBottomWidth: 0,
              paddingBottom: 2,
              marginBottom: 0,
          }]}>
            <View style={[styles.infoListItem]}>
              <Text style={styles.infoListItemLabel}>
                {mathAccountability.ACCOUNTABILITYMEASURE}
              </Text>
              <Text style={styles.infoListItemValue}>
                {
                  mathAccountability.MET_PERF === 'Y' || mathAccountability.MET_PERF === 'YSH' ?
                    'Meeting Goals' : mathAccountability.MET_PERF === 'N' ?
                    'Not Meeting Goals' : 'n/a'
                }
              </Text>
            </View>
          </View>
          <View style={[styles.infoListWrapper, {
              borderBottomWidth: 0,
              paddingBottom: 2,
              marginBottom: 0,
          }]}>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>
                {sciAccountability.ACCOUNTABILITYMEASURE}
              </Text>
              <Text style={styles.infoListItemValue}>
                {
                  sciAccountability.MET_PERF === 'Y' || sciAccountability.MET_PERF === 'YSH' ?
                    'Meeting Goals' : sciAccountability.MET_PERF === 'N' ?
                    'Not Meeting Goals' : 'n/a'
                }
              </Text>
            </View>
          </View>
          <View style={styles.infoListWrapper}>
            <View style={styles.infoListItem}>
              <Text style={styles.infoListItemLabel}>
                {elaAccountability.ACCOUNTABILITYMEASURE}
              </Text>
              <Text style={styles.infoListItemValue}>
                {
                  elaAccountability.MET_PERF === 'Y' || elaAccountability.MET_PERF === 'YSH' ?
                    'Meeting Goals' : elaAccountability.MET_PERF === 'N' ?
                    'Not Meeting Goals' : 'n/a'
                }
              </Text>
            </View>
          </View>

          <View style={[styles.infoListWrapper]}>
            <View style={[styles.infoListItem]}>
              <Text style={styles.infoListItemLabel}>
                Notes:
              </Text>
              <TextInput
                multiline={true}
                style={styles.notesInput}
                value={this.state.schoolNotes}
                onChange={this.notesUpdate.bind(this)}
              />

            </View>
          </View>
        </View>
      </View>
    );
  }
}
