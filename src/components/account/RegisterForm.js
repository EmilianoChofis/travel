import {View, Text, StyleSheet, Button} from 'react-native'
import React from "react";
import {Icon, Input} from "react-native-elements";

export default function RegisterForm() {

    return (
        <View style={styles.viewForm}>
            <Input
                containerStyle={styles.input} placeholder='Correo electronico'
                rightIcon={<Icon type="material-community" name="at" iconStyle={styles.icon}/>}
            />
            <Input
                containerStyle={styles.input} placeholder='Contraseña'
                rightIcon={<Icon type="material-community" name="eye-outline" iconStyle={styles.icon}/>}
            />
            <Input
                containerStyle={styles.input} placeholder='Repetir contraseña'
                rightIcon={<Icon type="material-community" name="eye-outline" iconStyle={styles.icon}/>}
            />
            <Button title={"Registrarse"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        marginTop: 30,

    },
    input: {
        width: "100%",
        marginTop: 20,

    },
    icon: {
        color: "#c1c1c1"
    }
})