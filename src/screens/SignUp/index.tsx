import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import api from '../../services/api';

import { styles } from './styles';

import Button from '../../components/Button';
import Header from '../../components/Header';


export default function SignUp({navigation}: {navigation:any}) {
  
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  function handleValidateUser() {
    if (!userName || !password || !confirmPassword) {
      return Alert.alert('Preencha todos os campos');
    } 

    return api.post('/user/create', {
      userName,
      password,
      confirmPassword
    }).then(res => {
      Alert.alert('Sua conta foi criada com sucesso!')
      navigation.navigate('SignIn')
    }).catch(err => Alert.alert(err.response.data.message))

  }

  return (
    <View style={styles.container}>
      <Header title="Registrar" backIcon={true} onPress = {() => navigation.goBack()} />

      <TextInput
        style={styles.input}
        label="Usuários do GitHub"
        value={userName}
        onChangeText={(text: string) => setUserName(text)}
        mode="outlined"
      />

      <TextInput
        style={styles.input}
        label="Senha"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        mode="outlined"
      />
      <TextInput
        style={styles.input}
        label="Confirme a Senha"
        value={confirmPassword}
        onChangeText={(text: string) => setConfirmPassword(text)}
        mode="outlined"
      />

      <Button title="Criar Conta" onPress={handleValidateUser} />
    </View>
  );
}
