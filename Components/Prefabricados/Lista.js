import React from 'react'
import {FlatList, TouchableOpacity, View, Text,Image, StyleSheet} from 'react-native'

export default function Lista({empresas,navigation}){
    return(
        <View style={{height:"90%"}}>
            <FlatList
            data={empresas}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={(item)=>(
                <Empresa empresas={item} navigation={navigation} item/>
            )}/>
        </View>
    )
}

function Empresa({empresas, navigation}){
    const {nombre, direccion, telefono, foto, descripcion, latitud, longitud}=empresas.item
    const goEmpresa=()=>{
        navigation.navigate("Empresa",{nombre,direccion, telefono, foto, descripcion,latitud, longitud})
    }

 return (
 <TouchableOpacity
 onPress={()=>goEmpresa()}
 >
 <View style={styles.viewEmpresa}>
    <View style={styles.viewEmpresaImage}>
    <Image
     resizeMode="cover"
     source={foto}
     style={styles.imageEmpresa}
     />
    </View> 
    
    <View>
        <Text style={styles.empresaTitulo}>{nombre}</Text>
        <Text style={styles.empresaInfo}>{direccion}</Text> 
        <Text style={styles.empresaInfo}>{telefono}</Text> 
        <Text style={styles.empresaDescripcion}>
            {
            descripcion.length> 0
            ? `${descripcion.substr(0,60)}...`:
            {descripcion}
            }
        </Text>       
    </View>
    </View>    
 </TouchableOpacity>)
}

const styles =StyleSheet.create({
    viewEmpresa:{
        flexDirection: "row",
        margin: 10
    },
    viewEmpresaImage:{
        marginRight:15
    },
    imageEmpresa:{
        width:90,
        height:90
    },
    empresaTitulo:{
        fontWeight:"bold"
    },
    empresaInfo:{
        paddingTop:2,
        color: "grey"
    },
    empresaDescripcion:{
        paddingTop:2,
        color:"grey",
        width:"75%"
    }
})