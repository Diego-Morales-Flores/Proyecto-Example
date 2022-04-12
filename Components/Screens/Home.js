import AsyncStorage from '@react-native-async-storage/async-storage'
import {Button, View,StyleSheet, Text,Dimensions,TouchableOpacity} from 'react-native';
import { useEffect,useState } from 'react';
import Lista from '../Prefabricados/Lista';
import '../Servers/SEmpresas'

const Home = ({ navigation }) => {
  const[empresas, setEmpresas]=useState({
    item:[]
  })
  /*
  const getEmpresas=()=>{
    console.log("jojo")
    fetch('/api/empresas')
    .then((response)=>{response.json()}
    )
    .then((json)=>{setData(json.item)}
    )
    .catch((error)=>{console.log(error)})
  }
  */

  const getEmpresas = async () => {
    try {
     const response = await fetch('/api/empresas');
     const json = await response.json();
     setEmpresas(json.item);
   } catch (error) {
     console.error(error);
   } 
 }

  useEffect(()=>{
    getEmpresas()
  },)

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('login')
  } catch(e) {
    console.log(e);
  }
  console.log('Done.')
}
const clearlogin=()=>{
  console.log(removeValue());
  console.log("asdf");
  navigation.navigate('Login')
}
const letra=JSON.stringify(empresas)
  return(

      <View style={styles.View}>   
      {empresas.length>0?(
          <Lista
          empresas={empresas}
          navigation={navigation}
          />
        ):(
          <View style={styles.notFoundView}>
            <Text style={styles.notFoundText}>No hay empresas Registradas.</Text>
          </View>
        )
      }
          <View style={styles.boton}>
          <TouchableOpacity style={styles.button}
          onPress={()=>clearlogin()}
          >
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'black' }}
          >Salir</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.boton}>
          <TouchableOpacity style={styles.button}
          onPress={()=>navigation.navigate("SignUpEmpresa")}
          >
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'black' }}
          >Registrar una Empresa</Text>
          </TouchableOpacity>
          </View>
      </View>
   
  )
}
export default Home;

const styles=StyleSheet.create({
  View:{
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    
  },
  notFoundView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  notFoundText:{
    fontSize:18,
    fontWeight:"bold"
  },
  button:{
    width: 250,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    backgroundColor: '#00CFEB90',
  },
  boton:{
    width: "100%",
    height: "5%",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white"
  }
})
/*
{
        
*/