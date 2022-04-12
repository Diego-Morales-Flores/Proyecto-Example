import { useState } from 'react';
import {Button, View,StyleSheet, Text,Dimensions,TouchableOpacity,Image} from 'react-native';

export default function Empresa({navigation, route}){

    const {nombre, direccion, telefono, foto, descripcion, latitud, longitud}=route.params
    navigation.setOptions({title:nombre})    
    return(
        <View style={styles.View}>

    <View style={styles.viewEmpresaImage}>
    <Image
     resizeMode="cover"
     source={foto}
     style={styles.imageEmpresa}
     />
    </View> 
    
    <View style={{flex:1}}>
        <Text style={styles.empresaTitulo}>{nombre}</Text>
        <TouchableOpacity style={styles.direccion}
        onPress={()=>{navigation.navigate("Map",{latitud,longitud})}}
        >
        <Text style={styles.empresaInfo}>{direccion}</Text>
        </TouchableOpacity> 
        <Text style={styles.empresaInfo}>{telefono}</Text> 
        <Text style={styles.empresaDescripcion}>
            {
            descripcion.length> 0
            ? `${descripcion.substr(0,2000)}`:
            {descripcion}
            }
        </Text>      
    </View>

            <View style={styles.boton}>
          <TouchableOpacity style={styles.button}
          onPress={()=>{}}
          >
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'black' }}
          >Hacer reserva</Text>
          </TouchableOpacity>
          </View>
        </View>
    )
}

const styles =StyleSheet.create({
    View:{
        flex:1,
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
      },
    boton:{
        width: "100%",
        height: "5%",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white"
      },
      button:{
        width: 250,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: '#00CFEB90',
      },
    viewEmpresa:{
        margin: 10
    },
    viewEmpresaImage:{
        flex:1
    },
    imageEmpresa:{
        flex:1
    },
    empresaTitulo:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center"
    },
    empresaInfo:{
        paddingTop:2,
        color: "black",
        textAlign: "center"
    },
    empresaDescripcion:{
        paddingTop:2,
        fontSize:16,
        color:"grey",
        width:330,
        height:170,
        backgroundColor:"white",
        textAlign: "center"
    },
    direccion:{
        backgroundColor: '#FF896F',
    }
})