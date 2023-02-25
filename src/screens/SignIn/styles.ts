import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {theme} from '../../global/styles/theme';

const {width}  = Dimensions.get('window');

export const styles  = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical:35
  },
  contain:{
    paddingTop: 30,
    width,
    alignItems:"center"
  },
  animation:{
    width: width/2
  },
  input:{
    width: width - 100,
    marginVertical: 5
  }
});
