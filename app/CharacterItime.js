import react from "react";
import { View, Text, StyleSheet ,Image} from 'react-native';

const CharactersItem = (props) =>{

    const Status=props.character.status;
    let bg ='#000000';
    switch (Status) {
        case 'Alive':
            bg='#10C620'
            break;
        case 'Deceased':
            bg='#FB2D20'
            break;
         case 'Presumed dead':
            bg='#B20AE3'
            break;
        default:
            break;
    }



    return (
        <View style={myStyle.row_B}>
           <View style={{ width:'3%',height:'100%',backgroundColor:bg}}></View>
            <View style={myStyle.image_B}>
                <Image style={myStyle.image_style} source={{uri:props.character.img}}/>
            </View>
            <View style={myStyle.name_B}>
                <Text style={myStyle.textName}>{props.character.name}</Text>
                <Text>{props.character.nickname}</Text>
                <Text style={myStyle.line}></Text>
                <Text style={myStyle.textOP}>{props.character.occupation}</Text>
            </View>      
          </View>
    )

}
const myStyle = StyleSheet.create({   
    line:{
        width:'100%',height:1,
        backgroundColor:'#17B890',marginVertical:5
    },
    row_B:{
        width:'100%', alignItems:'center',backgroundColor:'#ffffff',
        borderRadius:25,flexDirection:'row', marginBottom:12
    },
    image_B:{
        width:'22%', height:'100%',
    },
    image_style:{
        width:'100%', height:130,borderRadius:0
    },
    name_B:{
        width:'75%', height:'100%',padding:15        
    },
    textName:{
        fontSize:20,color:'#17B890',
    },
    textOP:{
        fontSize:15, color:'#393E41',fontStyle:'italic'
    },
    status:{
      
    }

});

export default CharactersItem;
