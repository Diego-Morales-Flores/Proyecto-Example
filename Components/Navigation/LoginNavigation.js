import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from "../Screens/SignUp";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import React from "react";
import Empresa from "../Screens/Empresa";
import Map from "../Screens/Map";
import SignUpEmpresa from "../Screens/SignUpEmpresa";
const Stack= createNativeStackNavigator()

const LoginNavigation = () =>{
    return(
    <SafeAreaView style={{width:'100%', height:'100%'}} >
    <NavigationContainer 
    >
     <Stack.Navigator 
      screenOptions={{headerShown: true}}
        >   
   <Stack.Screen
   name = 'Login'
   component = {Login}
   />
   <Stack.Screen
   name = 'SignUp'
   component = {SignUp}
   />
   <Stack.Screen
   name = 'Home'
   component = {Home}
   />
   <Stack.Screen
    name = 'Empresa'
    component = {Empresa}
    />
    <Stack.Screen
    name = 'Map'
    component = {Map}
    />
    <Stack.Screen
    name = 'SignUpEmpresa'
    component = {SignUpEmpresa}
    />
</Stack.Navigator> 
</NavigationContainer>
</SafeAreaView>

    )
}

export default LoginNavigation
