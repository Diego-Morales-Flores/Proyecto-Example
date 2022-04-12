import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, StatusBar, Button, Box } from 'react-native';
import { SafeAreaView } from 'react-native';



export default function Map({navigate, route}) {
    const {latitud,longitud}=route.params

    return (
    <SafeAreaView forceInset={{top: 'always'}} 
    style={{
        flex:1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
    <View style={{ flex:1, backgroundColor:"white"}}>
      <View styles={{flex:1}}>
      <MapView style={styles.map}
       
      initialRegion={{ 
        latitude: latitud,
        longitude: longitud,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
         <Marker
        coordinate={{
        latitude: latitud,
        longitude: longitud,
        }}
        />
      </MapView>
      </View>
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.8,
  },
});