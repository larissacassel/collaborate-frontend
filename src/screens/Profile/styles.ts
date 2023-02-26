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
 contain: {
  backgroundColor: '#eae1ed', 
  width: '100%',
  height: 200,  
  flexDirection: 'row', 
  alignItems: 'center'
 },
 avatar: {
  height: 100, 
  width: 100, 
  marginHorizontal: 10, 
  borderRadius: 50
 },
 userName: {
  fontSize: 20, 
  fontWeight: 'bold'
 }
});