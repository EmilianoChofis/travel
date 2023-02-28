import {View, Text, StyleSheet} from 'react-native'
import React from "react";
import {Image} from 'react-native-elements'
import {useNavigation} from "@react-navigation/native";
import RegisterForm from "../components/account/RegisterForm";

export default function LoginScreen(){

    const navigation = useNavigation()
    const routerLogin=()=>{
        navigation.navigate("loginS")
    }
    return(
        <View>
            <Image
                source={require("../assets/img/img.jpg")}
                style={styles.logo}
            />

            <View style={styles.form}>
                <Text>Formulario de register</Text>
                <RegisterForm></RegisterForm>
                <Text onPress={routerLogin}>Ya tiene cuenta</Text>
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
    form:{
        marginHorizontal:40,

    }
})