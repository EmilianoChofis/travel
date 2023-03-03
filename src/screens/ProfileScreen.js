import {View,  StyleSheet} from "react-native";
import React from "react";
import {Button} from "react-native-elements";
import {getAuth, signOut} from "firebase/auth";
import {useNavigation} from "@react-navigation/native";
export default function ProfileScreen(){
    const navigation = useNavigation()
    const auth = getAuth()
    const logout= async ()=>{

        await signOut(auth)

        navigation.navigate("indexS")
    }
    return(
        <View>
            <Button title="Logout"
            onPress={logout} buttonStyle={styles.button}
            titleStyle={styles.title}/>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"gray",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:"#e3e3e3",
        borderBottomColor:"#e3e3e3",
        marginTop:30,
        paddingVertical:10
    },
    title:{
        color:"#1b4673"
    }
})