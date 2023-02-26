import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Alert} from 'react-native';
import {EnvironmentButton} from '../../components/EnvironmentButton'
import api from '../../services/api'

import {styles} from './styles';

import Header from '../../components/Header';
import ReposList from '../../components/ReposList';
import Load from '../../components/Load';

interface RepositoriesProps {
  description: string;
  owner: string;
  followers: string;
  language: string;
  name: string;
  watchers: string
}

interface languagesProps {
  key: string;
  title: string;
}

export default function Home({navigation}: {navigation:any}){

  const [loading, setLoading] = useState(true);
  const [languageSelected, setLanguageSelected] = useState('all');
  const [languages, setLanguages] = useState<languagesProps[]>();
  const [repos, setRepos] = useState<RepositoriesProps[]>([]);

  useEffect(() => {
    fetchLanguages()
  }, [])


 async function fetchLanguages() {
    return api.get("/languages")
    .then((response: any) => {
      setLanguages(response.data)
      setLoading(false) 
      handleLanguageSelected(response.data[0].title)
    })
    .catch((err) => {
      setLoading(false) 
      Alert.alert("ops! ocorreu um erro")
   });
  }

  function fetchRepositories(language:string) {
    api.get(`/repos/${language}`)
    .then((response: any) => {
      setRepos(response.data)
    })
    .catch((err) => {
      Alert.alert('ops! ocorreu um erro')
   });
    
  }

  function handleLanguageSelected(language: string) {
    setLanguageSelected(language);
    fetchRepositories(language)
  }


  //TODO - TELA DE DETALHES
  function handleRepositoriesDetails(){
      navigation.navigate('EditFriend', {editScreen: true}); 
  }
  if(loading) return <Load/>

  return(
    <View style = {styles.container}>  
    <View>
        <Header title = "Repositórios" />

        <Text style={styles.subtitle}>
          Qual é a sua tecnologia favorita?
        </Text>
    </View>

    <View style = {{height: 80}}>
        <FlatList
          data={languages}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title}
              active={item.title === languageSelected}
              onPress={() => handleLanguageSelected(item.title)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          ListHeaderComponent={<View />}
          ListHeaderComponentStyle={{ marginRight: 22 }}
        />
    </View>

  <View> 
  
  <FlatList
                  data={repos}
                  keyExtractor = { (item) => item.name+item.owner }
                  renderItem = {({item}) => {
                  return(
                    <ReposList 
                        owner = {item.owner}
                        name = {item.name} 
                        stars = {item.watchers}
                    />
                      
                  );
                }}
                  contentContainerStyle = {{marginHorizontal:20, marginVertical:20}}
                  
                />
  </View>

    </View>
  )
}