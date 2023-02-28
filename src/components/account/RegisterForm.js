import {View, Text, StyleSheet} from 'react-native'
import React from "react";
import {Input} from "react-native-elements";

export default function RegisterForm(){

    return(
        <View>
          <Input/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height:150,
        resizeMode:"contain",
        marginTop:30
    },
    form:{
        marginHorizontal:40,

    }
})