import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Login from './src/Login'
import Exam from './src/Drawer/Exam'
import Profile from './src/Drawer/Profile'
import DrawerContent from './src/Drawer/DrawerContent'
import Settings from './src/Drawer/Settings'
import Aboutus from './src/Drawer/AboutUs'



const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()


function MyStack() {
    return(
        <Stack.Navigator   >
            <Stack.Screen
                name = 'Login'
                component= {Login}
                options = {{ headerShown: false}}
            />
             <Stack.Screen
                name = 'Profile'
                component= {Profile}
                options = {{ headerShown: false}}
            /> 
            <Stack.Screen
                name= 'Drawer'
                component= {MyDrawer}
                options = {{ headerShown: false}}/>
        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator
            drawerContent= {(props)=> <DrawerContent {...props}/>}>
            <Drawer.Screen
                name= 'Profile'
                component= {MyStack}/>
            <Drawer.Screen
                name= 'Exam'
                component= {Exam}/>
            <Drawer.Screen
                name= 'AboutUs'
                component= {Aboutus}/>
            <Drawer.Screen
                name= 'Settings'
                component= {Settings}/>
        </Drawer.Navigator>
    )
}



export default function App(){
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}
