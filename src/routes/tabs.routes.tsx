import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, SimpleLineIcons    } from '@expo/vector-icons';

import {theme} from '../global/styles/theme';

import Home from '../screens/Home/index';
import Profile from '../screens/Profile/index';

const Tab = createBottomTabNavigator();

export default function BottomTabs(){

      return(

            <Tab.Navigator screenOptions={{ headerShown: false }}>

              <Tab.Screen  name="Home" component={Home} options = {{
                 tabBarIcon:(
                    ({size, color}: {size: number, color: string}) => (
                          <Feather  name="list" size={size} color= {color} />
                      )),
                      tabBarActiveTintColor: theme.colors.primary,
                      tabBarInactiveTintColor: theme.colors.secondary,
                  }}
              />
              
            

               <Tab.Screen  name="Profile" component={Profile}  options = {{
                tabBarIcon:(
                  ({size, color}: {size: number, color: string}) => (
                       <SimpleLineIcons name="user" size={size} color= {color} />
                    )),
                     tabBarActiveTintColor: theme.colors.primary,
                     tabBarInactiveTintColor: theme.colors.secondary,
                 }}  
              />

            </Tab.Navigator>

      );
}