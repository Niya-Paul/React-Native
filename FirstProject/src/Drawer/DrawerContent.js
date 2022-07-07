import React,{Component} from "react";
import {View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'



export default class DrawerContent extends Component {
    
    render(){
        return(
            <View style= {styles.container}>
                 <Icon name="cancel-presentation" size={30} color="#fff"/>
                <View style= {styles.profileContainer}>
                   
                    <View style= {styles.profileIcon}>
                        <Image style= {styles.profileImage}
                            source= {require('../../assets/girl.jpg')}></Image>
                    </View>
                    <View style= {styles.infoView}>
                        <Text style= {styles.nameText}>Niya</Text>
                       
                        
                    </View>
                    <Icon name="navigate-next" size={25} color="green"/>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('Profile')}>Profile</Text>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('Exam')}>Exam</Text>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('AboutUs')}>About Us</Text>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('Settings')}>Settings</Text>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('Exam')}>Notification</Text>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('Exam')}>Refferals</Text>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('Exam')}>Share App</Text>
                </View>
                <View style={styles.icon}>
              <Icon name='crop-din' size={35} color='green'></Icon>
               <Text style={{color:'#fff',fontSize:15,marginTop:10}}
                
                    onPress= {()=> this.props.navigation.navigate('Exam')}>Log Out</Text>
                </View>
                <TouchableHighlight style= {styles.buttonView}
                        underlayColor = 'transparent'
                        onPress={()=> this.props.navigation.navigate('Drawer',{username: this.state.name})}>
                        <Text style= {styles.buttonText}>Enquire Now</Text>
                    </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a254a'
    },
    icon:{
        width:'100%',height:55,
        flexDirection:'row',
        marginLeft:5,
        borderBottomWidth:1,
        alignItems:'center'
        
    },
    menu: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 10,
        color: 'green',
        fontWeight: 'bold'
    },
    profileContainer: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    menu: {
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10,
        color: 'green',
        fontWeight: 'bold',
        borderBottomWidth:1
    },
    profileIcon: {
        height: 100,
        width: 100,
        backgroundColor: '#bbbbbb',
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 10
    },
    infoView: {
        marginLeft: 10
    },
    profileImage: {
        height: '100%',
        width: '100%',
        borderRadius:50
    },
    nameText: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5
    },
    emailText: {
        fontWeight: 'bold'
    },
    signouttext:{
        textAlign:'center',
        fontSize:20,
        marginBottom:100,
        marginTop:100
    },
    buttonView: {
        width: '60%',
        height: 55,
        marginTop: 30,
        borderRadius: 8,
        borderColor:'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        marginLeft:30
    }
})