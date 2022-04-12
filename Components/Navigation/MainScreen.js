import React, { useEffect, useState } from "react";
import HomeNavigation from './HomeNavigation'
import LoginNavigation from './LoginNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage';

const getLogin = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@login')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e);
  }
}

const MainScreen = () => {
  const [estado, setEstado]=useState(false)
  log=getLogin;

  return (
    estado?
      <HomeNavigation/>
      :
      <LoginNavigation />
  )
}

export default MainScreen
