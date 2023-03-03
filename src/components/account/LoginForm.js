import {StyleSheet,  View} from "react-native";
import {Button, Icon, Input} from "react-native-elements";
import React, {useState} from "react";


export default function LoginForm(){
    const [pass, setPass] = useState(false);
    const showPass = ()=>{
        setPass(!pass)
    }
    return(
        <View style={styles.viewForm}>
            <Input containerStyle={styles.input} placeholder='Email'
                   rightIcon={<Icon type="material-community" name="at" iconStyle={styles.icon}/>}/>
            <Input containerStyle={styles.input} placeholder='Password' secureTextEntry={!pass}
                   rightIcon={<Icon type="material-community" name={pass ? "eye-off-outline" : "eye-outline"} iconStyle={styles.icon} onPress={showPass}/>}/>
            <Button title={"Login"} containerStyle={styles.containerBtn} buttonStyle={styles.btn}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        marginTop: 30,

    },
    containerBtn: {
        width: "95%",
        marginTop: 20,

    },
    btn: {
        backgroundColor: "green"
    }
})