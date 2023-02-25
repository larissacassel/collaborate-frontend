import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../global/styles/theme';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    marginVertical:35
  },
  input:{
    width: width - 100,
    marginTop: 25,

  }
});