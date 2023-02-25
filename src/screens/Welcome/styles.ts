import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {theme} from '../../global/styles/theme';

const styles  = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical:30
  },
  image:{
    height: Dimensions.get('window').width * 0.7
  },
  title:{
    fontSize:30,
    color: theme.colors.primary,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitle:{
    fontSize:15,
    color: theme.colors.secondary,
    fontWeight: "900",
    marginVertical:10,
    textAlign: "center"
  },
  wrapper:{
    flexDirection:'row'
  },
  auvoImg:{
    height: 40,
    width:40,
    marginRight:20
  },
  wrapperText:{
    fontSize: 15,
    color: theme.colors.primary
  }
});

export default styles;