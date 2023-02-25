import React,{useEffect, useState}  from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import float from '../../assets/Float.png';
import gb_image from '../../assets/gb.png';

import Button from '../../components/Button';
import Load from '../../components/Load';

export default function Welcome({navigation}: {navigation:any}){

  const [loading, setLoading] = useState(true);
  const [acttive, setActive] = useState(false);

  useEffect(() => {
    async function getToken(){ 
          try {
            const token = await AsyncStorage.getItem('@GBCOLLABORATE_TOKEN');
            setLoading(false);
            return  token ? setActive(true): setActive(false);
          } catch(e) {
            setLoading(false);
          }
    }
    getToken();
  });
  


  function handleNextScreen(screenName: string){
      navigation.navigate(screenName);    
    }


if(loading) return <Load/>

  return(
    <View style = {styles.container}>
        <Image 
          style = {styles.image} 
          source = {float}
          resizeMode="contain"
          />

          <View>
            <Text style={styles.title}>
                Hello dev!
            </Text>

            <Text style = {styles.subTitle}>
              Conheça os projetos{'\n'}
              mais populares do github.
            </Text>
            {
              acttive ? <Button title = "Tela Inicial" withBorder = {true}  onPress = {() => handleNextScreen('BottomTabs')} />
              : <Button title = "Começar Agora" onPress = {() => handleNextScreen('SignIn')} />
            }
            

          </View>
        
          <View style = {styles.wrapper}>

              <Image source = {gb_image} style = {styles.auvoImg} />

              <Text style = {styles.wrapperText}>
                Aplicativo desenvolvido durante o{'\n'} 
                processo seletivo do grupo boticário
              </Text>
          </View>
    </View>
  )
}