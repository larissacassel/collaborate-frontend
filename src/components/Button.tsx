import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, Text, Dimensions } from 'react-native';
import {theme} from '../global/styles/theme';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
  withBorder?: boolean
}

export default function Button({title, withBorder, ...rest}:ButtonProps){
    return(
      <TouchableOpacity style = {[withBorder ? styles.btmWithBorder : styles.btm]} {...rest} >
          <Text style = {[withBorder ? styles.titleBtmWithBorder : styles.title]}> {title} </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  btm:{
      width: Dimensions.get('window').width - 100,
      height: 50,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      marginTop:10
  },
  btmWithBorder:{
    width: Dimensions.get('window').width - 100,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
    borderWidth:1,
    borderColor: theme.colors.primary
  },
  title:{
    color: theme.colors.white,
    fontSize: 15
  },
  titleBtmWithBorder:{
    color: theme.colors.primary,
    fontSize: 15
  }
});