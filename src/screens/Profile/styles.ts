import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import {theme} from '../../global/styles/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    marginVertical:30
  },
  subHeader:{
    flexDirection: 'row',
    width,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  contain:{
    flex: 1
  },
  nameText:{
    fontSize: 30,
    color: theme.colors.white,
    fontWeight: 'bold'
  },
  backgorund:{
    height: height / 2,
    justifyContent: 'flex-end',
    marginTop: 10
  }
});