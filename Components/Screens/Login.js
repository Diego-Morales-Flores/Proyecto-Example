import React from "react";
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { BlurView } from "expo-blur";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const reviewSchema = yup.object({
  email: yup
    .string()
    .email('Ingrese un correo electrónico valido').trim()
    .required('Correo electrónico es un campo requerido')
  ,
  password: yup.string().min(8, 'La contraseña debe tener almenos 8 caracteres')
    .required('Contraseña es un campo requerido'),
});


const Login = ({ navigation }) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: reviewSchema,
    onSubmit: () => {
      handleSubmit()
    },
  })
  const { setFieldValue } = formik
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        '/api/login',{
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            datos:JSON.stringify({
              "nombre":formik.values.email,
              "email":formik.values.password
            })
          },
        })
      const json = await response.json();
      console.log(response)
      navigation.navigate('Home')
      return json.mensaje;
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <View style={styles.container}>
      <Image source={require('../../assets/opciones/fondo.png')} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <BlurView intensity={100}>
          <View style={styles.login}>
            <Image source={require('../../assets/opciones/localizate.png')} style={styles.logoPicture} />
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Correo Electrónico</Text>
              <TextInput
                onChangeText={e => { setFieldValue('email', e) }}
                style={styles.input}
                placeholder="ejemplo@gmail.com"
                onBlur={formik.handleBlur('email')}
              />
              <Text style={{ color: 'red' }}>
                {formik.touched.email ? formik.errors.email : ''}
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Contraseña</Text>
              <TextInput
                onChangeText={e => { setFieldValue('password', e) }}
                style={styles.input}
                onBlur={formik.handleBlur('password')}
                placeholder="Introduzca su contraseña"
                secureTextEntry={true}
              />
              <Text style={{ color: 'red' }}>
                {formik.touched.password ? formik.errors.password : ''}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => { formik.handleSubmit(); }}
              style={styles.butoon}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}
              >Iniciar sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp')
              }}
              style={[styles.butoon, { backgroundColor: '#679f9090' }]}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Registrarse</Text>
            </TouchableOpacity>

            

          </View  >
        </BlurView>
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 300,
    height: 550,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  logoPicture: {
    width: 200,
    height: 140,
    marginVertical: 10
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

export default Login;
