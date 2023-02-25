import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome/index';
import SignIn from '../screens/SignIn/index';
import SignUp from '../screens/SignUp/index';
import BottomTabs from './tabs.routes';


const StackRoutes = createNativeStackNavigator();

export default function NavigationStack(){

  
  return(

     <NavigationContainer> 
      <StackRoutes.Navigator screenOptions={{ headerShown: false }}> 
          
        <StackRoutes.Screen name="Welcome" component={Welcome}/> 
        <StackRoutes.Screen name="SignIn" component={SignIn} />
        <StackRoutes.Screen name="SignUp" component={SignUp} />
        <StackRoutes.Screen name="BottomTabs" component={BottomTabs} /> 
        
      </StackRoutes.Navigator>
    </NavigationContainer>

  );
}


