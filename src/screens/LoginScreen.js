import {View, Text, StyleSheet} from 'react-native'
import React from "react";
import {Image} from 'react-native-elements'
import {useNavigation} from "@react-navigation/native";
import LoginForm from "../components/account/LoginForm";

export default function LoginScreen(){

    const navigation = useNavigation()
    const routerRegister=()=>{
        navigation.navigate("registerS")
    }
    return(
        <View>
            <Image
                source={require("../assets/img/flak.jpg")}
                style={styles.logo}
            />
            <View style={styles.contentForm}>
                <LoginForm/>
                <View>

                    <Text style={styles.text}>
                        Not registered yet?
                        <Text style={styles.link} onPress={routerRegister}> Signup</Text>
                    </Text>
                </View>
            </View>
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
    contentForm:{
        marginHorizontal:10
    },
    text:{
        marginTop:15,
        marginHorizontal:10
    },
    link:{
        marginLeft:10,
        color:"#2f639e",
        fontWeight:"bold"
    }
})