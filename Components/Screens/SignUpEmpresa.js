import React from "react";
import { Image, StyleSheet, View, Text, ScrollView,TouchableOpacity,TextInput, Dimensions, } from 'react-native'
import { BlurView } from "expo-blur";
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup'

const listaEmail=[
  /*getAction(
  '/users/c@gmail.com',),
  'c@gmail.com',
  'b@gmail.com',
  'a@gmail.com'
  */
]
 
const reviewSchema=yup.object({
  nombre: yup.string()
  .required('Nombre es un campo requerido'),
  direccion: yup.string()
  .required('Direccion es un campo requerido'),
  telefono: yup.string()
  .required('Telefono es un campo requerido'),
  descripcion: yup.string()
  .required('Descripcion es un campo requerido'),
});



export default function SignUpEmpresa({navigation}){
    const[empresas, setEmpresas]=useState(null)
  let [entradaNombre, setEntradaNombre]=useState()
  let [entradaDireccion, setEntradaDireccion]=useState()
  let [entradaTelefono, setEntradaTelefono]=useState()
  let [entradaDescripcion, setEntradaDescripcion]=useState()

    const formik =useFormik({
      initialValues:{
            nombre: "",
            direccion: "",  
            telefono:"",
            foto:require("../../assets/icons/perfil.png"),
            latitud:-16.3000, 
            longitud:-68.0800,
            descripcion:""

      },
      validationSchema:reviewSchema,
      onSubmit:values=>{
        handleSubmit()
      },
  })
  const{setFieldValue}= formik

  const handleSubmit = async (event) =>  {
    event.preventDefault()
    try {
        const res= await fetch('api/register',{method:'POST', body:
            JSON.stringify({nombre, direccion, telefono,foto, latitud, longitud, descripcion})
        })
        const json= await res.json()
        setEmpresas([...item, json.item])
        navigation.navigate("Home")
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const screenHeight = Dimensions.get('window').height
    return(
<View style={styles.container}>
      <Image source={require('../../assets/opciones/fondo.png')} style={[styles.image,StyleSheet.absoluteFill]}/>
        <BlurView intensity={100}>
          <View style={styles.register}>
          <ScrollView 
      contentContainerStyle = {{
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
          <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Nombre de la Empresa</Text>
              <TextInput  
              style={styles.input} 
              placeholder='Nombre del lugar'
              onBlur={formik.handleBlur('nombre')}
              onChangeText={e=>setFieldValue('nombre',e)}
              ref={input => { entradaNombre = input }}
              />
              <Text style={{color: 'red'}}>{formik.touched.nombre?formik.errors.nombre:''}</Text>
            </View>
            <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Direccion</Text>
              <TextInput  
              style={styles.input} 
              placeholder='AV. Ejemplo'
              onBlur={formik.handleBlur('direccion')}
              onChangeText={e=>setFieldValue('direccion',e)}
              ref={input => { entradaDireccion = input }} 
              />
              <Text style={{color: 'red'}}>{formik.touched.direccion?formik.errors.direccion:''}</Text>
            </View>
            <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Telefono</Text>
              <TextInput  
              style={styles.input} 
              placeholder='Ejemplo: 68000265'
              onBlur={formik.handleBlur('telefono')}
              onChangeText={e=>setFieldValue('telefono',e)}
              ref={input => { entradaTelefono = input }}
              />
              <Text style={{color: 'red'}}>{formik.touched.telefono?formik.errors.telefono:''}</Text>
            </View>
            <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Descripcion</Text>
              <TextInput  
              style={styles.descripcion} 
              placeholder='Descripcion del lugar'
              onBlur={formik.handleBlur('descripcion')}
              onChangeText={e=>setFieldValue('descripcion',e)}
              ref={input => { entradaDescripcion = input }}
              />
              <Text style={{color: 'red'}}>{formik.touched.descripcion?formik.errors.descripcion:''}</Text>
            </View>
            <TouchableOpacity style={[styles.butoon,{backgroundColor: '#679f9090'}]}
            onPress={()=>{formik.handleSubmit()}}
            >
              <Text style={{fontSize:17, fontWeight: '400', color: 'white'}}>Registrar Empresa</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
        </BlurView>
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    register:{
      width: 300,
      height: 520,
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center'
    },
    input: {
      
      width: 250,
      height: 40,
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#ffffff90',
      marginBottom: 20
    },
    descripcion:{
      width: 250,
      height: 200,
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#ffffff90',
      marginBottom: 20
    },
    butoon: {
      
      width: 250,
      height: 40,
      borderRadius: 10,
      backgroundColor: '#00CFEB90',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      borderColor: '#fff',
      borderWidth: 1
    }
});
  
