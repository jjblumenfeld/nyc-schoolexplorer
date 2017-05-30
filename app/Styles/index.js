import React from 'react';

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 65,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#07889B',
    flex: 1,
    flexWrap: 'wrap',
  },
  mainContent: {
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 15,
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

  infoListWrapper: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },

  infoListItem: {
    flex: 0.5,
  },

  isFullWidth: {
    flex: 1
  },

  infoListItemLabel: {
    color: '#fff'
  },

  infoListItemValue: {
    color: '#fff'
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

module.exports = styles;
