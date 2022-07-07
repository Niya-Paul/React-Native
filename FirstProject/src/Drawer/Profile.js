import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native'


class Flexcontent extends Component
{render(){
    return(
        <View>
            <Text style={styles.profileText}>welcome {this.props.name}</Text>
        </View>
    )
}

}

export default class Profile extends Component {
    componentDidMount(){
        console.log(this.props.route.params.username)

    }
   
    render(){
        return(
            <View style= {styles.container}>
               <Flexcontent name={this.props.route.params.username}>
               
               </Flexcontent>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    profileText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#bbb'
    }
})