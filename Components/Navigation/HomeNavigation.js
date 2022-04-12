import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from "../Screens/SignUp";
import Login from "../Screens/Login";
import Empresa from "../Screens/Empresa"
import Home from "../Screens/Home";
import HomeNav from "./HomeNav"
import React from "react";
import Map from "../Screens/Map";

const Stack= createNativeStackNavigator()

const HomeNavigation = () =>{
    return(
        <SafeAreaView style={{flex:1,width:'100%', height:'100%'}} >
                 <NavigationContainer
                 >   
                <Stack.Navigator   
                screenOptions={{headerShown: true}}
                     >   
                <Stack.Screen
                name = 'Home'
                component = {Home}
                />
                <Stack.Screen
                name = 'Login'
                component = {Login}
                />
                <Stack.Screen
                name = 'SignUp'
                component = {SignUp}
                />
                 <Stack.Screen
                name = 'Empresa'
                component = {Empresa}
                />
                <Stack.Screen
                name = 'Map'
                component = {Map}
                />
            </Stack.Navigator> 
        </NavigationContainer>
        </SafeAreaView>
    )
}

export default HomeNavigation