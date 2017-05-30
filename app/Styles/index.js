import React from 'react';

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 65,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#07889B',
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
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    borderColor: '#efefef',
    borderWidth: 0,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },

  infoListItem: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  infoListItemLabel: {
    color: '#fff',
    fontSize: 12,
  },

  infoListItemValue: {
    color: '#fff',
    fontSize: 14,
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
