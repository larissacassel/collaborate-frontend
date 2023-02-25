import React from 'react';
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
 
  } from 'react-native';

import {theme} from '../global/styles/theme';

const width = Dimensions.get('window').width;

interface SalonListProps extends TouchableOpacityProps{
  name: string;
  stars: string;
  owner: string;
}


export default function ReposList({name, stars, owner, ...rest}: SalonListProps){

  return(
    <TouchableOpacity style = {styles.container} {...rest}>
  
          <View style = {styles.contain} >
              <Text style = {styles.stars} >
              ⭐{stars}
              </Text>          
              <Text style = {styles.nameText} > 
                {owner}/{name}  
              </Text> 
          </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    width: width - 50,
    backgroundColor: theme.colors.secondary,
    alignItems:'flex-end',
    margin:10,
 
    borderRadius: 8
  
  },
  stars:{
    marginTop:10,
    marginRight:10,
    fontSize:13,
    color: theme.colors.white
  },
  contain:{
    flexDirection: 'row',
    width: width-50,
    padding:10,
    alignItems:'center'
  },
  nameText:{
    color: theme.colors.white,
    fontSize: 15,
    marginHorizontal: 20
  }
});