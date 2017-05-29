import React from 'react';

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#07889B',
    flex: 1
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

module.exports = styles;
