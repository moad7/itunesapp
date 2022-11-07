import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,Alert } from "react-native";  

const App=()=>{


    const doSomething =async()=>{
       const api='https://itunes.apple.com/search?term=metallica'
       const response= await fetch(api,{
        method:'get'
       });

       const data = await response.json()
       console.log(data)
    }

    return(
        <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
                <Text style={myStyle.btntext}>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}
const myStyle=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#DEE5E5',
        padding:30
    },
    btn:{
        width:'100%',
        paddingVertical:22,
        alignItems:'center',
        backgroundColor:'#17B890',
        borderRadius:15
    },
    btntext:{
        color:'#DEE5E5',
        fontSize:22,
        fontWeight:'700'

    }
})


export default App;