import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Components/Navigation/MainScreen'
import Login from './Components/Screens/Login'
import Home from './Components/Screens/Home'
import './Components/Servers/SEmpresas'
export default function App() {
  return (
    <View>
      <MainScreen/>
    </View>
  );
}

