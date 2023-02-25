import React, {useRef, useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import LottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api'

import {styles} from './styles';
import wolf from '../../assets/wolf_animation.json';

import Button from '../../components/Button';
import Header from '../../components/Header';

export default function SignIn({navigation}: {navigation:any}){

  const animation = useRef<LottieView>(null);
  const [on, setOn] = useState(false);

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  useEffect(() => {
      if(animation.current){
        if(!on){
          animation.current.play(38, 0);
        }else{
           animation.current.play(5, 38);
        }
      }
    }, [on]);

  function handleInputFocus(status: boolean) {
    setOn(status);
  }

  async function saveToken(token:string) {
    try {
      await AsyncStorage.setItem('@GBCOLLABORATE_TOKEN', token)
      navigation.navigate('BottomTabs')
    } catch (error) {
      Alert.alert('Erro, Tente mais tarde')
    }
  }

  async function handleLogin(){
    if(!userName || !password){
      Alert.alert('Preencha todos os campos');
      return
    }
    api.post('/user/login', {userName, password}).then((response) => {
      saveToken(response.data.token)
    }).catch(err => Alert.alert('Usuário ou senha invalidos'))

  }

  return(
    <View style = {styles.container}>
        <Header title = "Login"  backIcon = {true} onPress = {() => navigation.goBack()} />

        <View style = {styles.contain}>
            <LottieView 
                style = {styles.animation}
                resizeMode = "cover"
                ref = {animation}
                source={wolf} 
                autoPlay = {false}
                loop = {false}
              />

              <TextInput
                 style = {styles.input}
                 label="Usuário"
                 value={userName}
                 onChangeText={ (text: string) => setUserName(text)}
                 onFocus = { ()=> handleInputFocus(false)} 
                 mode = "outlined"
              />

              <TextInput
                 style = {styles.input}
                 label="Senha"
                 value={password}
                 onChangeText={(text: string) => setPassword(text)}
                 onFocus = { () =>  handleInputFocus(true)}
                 secureTextEntry={true}
                 mode = "outlined"
              />

              <Button title = "Entrar" onPress = {handleLogin} />
              <Button title = "Cadastrar" withBorder = {true} onPress = {() => navigation.navigate('SignUp')} />
              
        </View>  


    </View>
  )
}