import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api'

import Header from '../../components/Header';

import {styles} from './styles';
import zombieing from '../../assets/Zombieing.png'

interface UserProps {
    _id: string,
    userName: string;
    avatar: string;
}

export default function Profile(){

  const [userData, setUserData] = useState<UserProps>()

   useEffect(() => {
    async function getToken(){ 
          try {
            const token = await AsyncStorage.getItem('@GBCOLLABORATE_TOKEN');
            const response = await api.get('/user', {
                headers: {'Authorization': `Bearer ${token}`}
            })
            setUserData(response.data)
          } catch(e) {
            setUserData({_id: '1', userName: '', avatar: zombieing})
            return;
          }
    }
    getToken();
  });

  return(
      <View style = {styles.container} >

        <Header title = "Perfil" />

        <View style = {styles.contain}>
            <Image style = {styles.avatar} source={{uri: userData?.avatar}} />
            <Text style = {styles.userName} >{userData?.userName}</Text>
        </View>


      </View>
  )
}