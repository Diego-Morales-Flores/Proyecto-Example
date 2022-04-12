import React from "react";
import { Image, StyleSheet, View, Text, ScrollView,TouchableOpacity,TextInput } from 'react-native'
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
  email: yup
  .string()
  .email('Ingrese un correo electrónico valido').trim()
  .notOneOf(listaEmail,'Ese correo electrónico ya existe')
  .required('Correo electrónico es un campo requerido')
  ,
  password: yup.string().min(8,'La contraseña debe tener almenos 8 caracteres')
  .required('Contraseña es un campo requerido'),
  password2: yup.string().oneOf([yup.ref('password')],'Las contraseñas deben coincidir')
  .required('Debe repertir la contraseña')
});



export default function SingUp({navigation}){
  let [entradaEmail, setEntradaEmail]=useState()
  let [entradaPass, setEntradaPass]=useState()
  let [entradaPass2, setEntradaPass2]=useState()

    const formik =useFormik({
      initialValues:{
        email:'',
        password:'',
        password2:''
      },
      validationSchema:reviewSchema,
      onSubmit:values=>{
        handleSubmit()
      },
  })
  const{setFieldValue}= formik

  const handleSubmit = () => {
   
}

    return(
<View style={styles.container}>
      <Image source={require('../../assets/opciones/fondo.png')} style={[styles.image,StyleSheet.absoluteFill]}/>

      <ScrollView contentContainerStyle = {{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <BlurView intensity={100}>
          <View style={styles.register}>
          <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Correo Electrónico</Text>
              <TextInput  
              style={styles.input} 
              placeholder='ejemplo@gmail.com'
              onBlur={formik.handleBlur('email')}
              onChangeText={e=>setFieldValue('email',e)}
              ref={input => { entradaEmail = input }}
              />
              <Text style={{color: 'red'}}>{formik.touched.email?formik.errors.email:''}</Text>
            </View>
            <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Constraseña</Text>
              <TextInput  
              style={styles.input} 
              placeholder='Introduzca su contraseña'
              onBlur={formik.handleBlur('password')}
              onChangeText={e=>setFieldValue('password',e)}
              ref={input => { entradaPass = input }} 
              secureTextEntry={true}/>
              <Text style={{color: 'red'}}>{formik.touched.password?formik.errors.password:''}</Text>
            </View>
            <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Confirme su Constraseña</Text>
              <TextInput  
              style={styles.input} 
              placeholder='Repita su contraseña'
              onBlur={formik.handleBlur('password2')}
              onChangeText={e=>setFieldValue('password2',e)}
              ref={input => { entradaPass2 = input }}
              secureTextEntry={true}/>
              <Text style={{color: 'red'}}>{formik.touched.password2?formik.errors.password2:''}</Text>
            </View>
            
            <TouchableOpacity style={[styles.butoon,{backgroundColor: '#679f9090'}]}
            onPress={()=>{formik.handleSubmit()}}
            >
              <Text style={{fontSize:17, fontWeight: '400', color: 'white'}}>Crear cuenta</Text>
            </TouchableOpacity>

          </View>
        </BlurView>
      </ScrollView>
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
  
/*
<View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Nombre</Text>
              <TextInput  style={styles.input} placeholder="Nombre Apellido"/>
            </View>

            <View>
              <Text style={{fontSize:17, fontWeight:'400', color: 'white'}}>Nro. Celular</Text>
              <TextInput  style={styles.input} placeholder="Nro. Celular" />
            </View>
            */