import { AsyncStorage } from 'react-native';

import SchoolData from '../data/SE_Schools.json';
import SchoolAccountability from '../data/SE_Accountability.json';
import SchoolEnrollment from '../data/SE_Enrollment.json';
import SchoolStaff from '../data/SE_Staff.json';
import SchoolClassSize from '../data/SE_Class_Size.json';

const equalsEntityCD = function(entity_cd, element) {
  if (element) {
    return entity_cd === element.ENTITY_CD;
  } else {
    return function(element) {
      element.ENTITY_CD === entity_cd;
    };
  }
};

const API = {
  getSchools() {
    return SchoolData;
  },
  getSchool(entity_cd) {
    let equalFn = equalsEntityCD(entity_cd);
    let school = {
      ENTITY_CD: entity_cd
    };
    let schoolData = SchoolData.find(equalFn);
    let staff = SchoolStaff.find(equalFn);
    let classSize = SchoolClassSize.find(equalFn);
    let enrollment = SchoolEnrollment.find(equalFn);
    let accountability = SchoolAccountability.filter(equalFn);

    school.SCHOOL_NAME = schoolData.SCHOOL_NAME;
    school.CSO_NAME = staff.CSO_NAME;
    school.DISTRICT_NAME = staff.DISTRICT_NAME;
    school.STREET = staff.STREET;
    school.CITY = staff.CITY;
    school.PHONE = staff.PHONE;
    school.GRADE_RANGE = staff.GRADE_RANGE;

    [6, 7, 8].forEach(function(grade) {
      let key = 'ENROLLMENT_' + grade;
      school[key] = enrollment[key];
      school.TOTAL_ENROLLMENT += enrollment[key];
    });

    let avgClassSize = 0;
    let classRoomCount = 0;
    ['MATH', 'SS', 'ENGLISH', 'SCI'].forEach(function(classRoom) {
      let key = 'GRADE_8' + classRoom;
      school[key] - schoolClassSize[key];
      let avgClassRoomSize = schoolClassSize[key];
      if (avgClassRoomSize) {
        classRoomCount++;
        avgClassSize += avgClassRoomSize;
      }
    });

    school.avgClassSize = avgClassSize ?
      Math.round(avgClassSize / classRoomCount) :
      avgClassSize;

    school.accountability = accountability;
    return school;
  },
  async getNotes(entity_cd) {
    try {
      const value = await AsyncStorage.getItem('@NYCEXPLORER:' + entity_cd);
      if (value) {
        return value;
      } else {
        return '';
      }
    } catch (error) {
      // Error retrieving data
      return '';
    }
  },
  async setNote(entity_cd, note) {
    try {
      await AsyncStorage.setItem('@NYCEXPLORER:' + entity_cd, note);
    } catch (error) {
      // Error saving data
    }
  }
};

export default API;
