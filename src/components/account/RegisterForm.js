import {View, Text, StyleSheet, Button} from 'react-native'
import React, {useState} from "react";
import {Icon, Input} from "react-native-elements";
import {Formik, useFormik} from "formik";
import * as Yup from "yup"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Toast from "react-native-toast-message";
import {useNavigation} from "@react-navigation/native";

export default function RegisterForm() {

    const navigation = useNavigation()

    const [pass, setPass] = useState(false);
    const [repeatPass, setRepeatPass] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            pass: "",
            repeatPass: ""
        },
        validationSchema:Yup.object({
            email:Yup.string().email("Invalid Email format").required("Required"),
            pass:Yup.string().required("Required"),
            repeatPass:Yup.string().required("Required").oneOf([Yup.ref("pass")],"Not coincidence with the proportioned password")
        }),
        validateOnChange:false
        ,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth()
                await createUserWithEmailAndPassword(
                    auth,formValue.email, formValue.pass
                )
                //se puede usar las siguientes formas
                //navigation.navigate("indexS")
                navigation.goBack()
            }catch (error){
                Toast.show({
                    type:"error",
                    position:"bottom",
                    text1:"Error at Sign-up"
                })
            }
        }
    })

    const showPass = ()=>{
        setPass(!pass)
    }
    const showRepeatPass = ()=>{
        setRepeatPass(!repeatPass)
    }

    return (
        <View style={styles.viewForm}>
            <Formik initialValues={formik}>

            </Formik>
            <Input
                containerStyle={styles.input} placeholder='Email'
                rightIcon={<Icon type="material-community" name="at" iconStyle={styles.icon}/>}
                onChangeText={text => formik.setFieldValue("email", text)}
                errorMessage={formik.errors.email}
            />
            <Input
                containerStyle={styles.input} placeholder='Password' secureTextEntry={!pass}
                rightIcon={<Icon type="material-community" name={pass ? "eye-off-outline" : "eye-outline"} iconStyle={styles.icon} onPress={showPass}/>}
                onChangeText={text => formik.setFieldValue("pass", text)}
                errorMessage={formik.errors.pass}
            />
            <Input
                containerStyle={styles.input} placeholder='Repeat Password' secureTextEntry={!repeatPass}
                rightIcon={<Icon type="material-community" name={repeatPass ? "eye-off-outline" : "eye-outline"} iconStyle={styles.icon} onPress={showRepeatPass}/>}
                onChangeText={text => formik.setFieldValue("repeatPass", text)}
                errorMessage={formik.errors.repeatPass}
            />
            <Button title={"Registrarse"} containerStyle={styles.containerBtn} buttonStyle={styles.btn}
                    onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
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
    },
    containerBtn: {
        width: "95%",
        marginTop: 20,

    },
    btn: {
        backgroundColor: "green"
    }
})