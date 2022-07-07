import React,{Component,useEffect,useState} from "react"
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight
    
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'



function MyIcon(){
    return(
        <Text style={{fontSize:15}} ><Icon name="circle" size={15} color='green'/> classes</Text>
    )
}


export default class Exam extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                
            
            </View>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    ScrollContainer:{
        width:'100%',
        height:'100%'
    },
    ScrollViewChild:{
        width:'100%',
      //  alignItems:'center',
        //justifyContent:'center'
    },
    headercard:{
        width:'100%',
        height:70,
        
        
        backgroundColor:'#fff'
    },
    button:{
        width:'30%',
        height:30,
        backgroundColor:'green',
        marginTop:130,
        marginLeft:50,
        marginBottom:70,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
      },
    

    })