import {View, Text, StyleSheet, Button} from 'react-native'
import React from "react";
import {Icon, Input} from "react-native-elements";
import {Formik, useFormik} from "formik";
import * as Yup from "yup"

export default function RegisterForm() {
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
        onSubmit: (formValue) => {
            console.log(formValue)
        }
    })
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
                containerStyle={styles.input} placeholder='Password' secureTextEntry={true}
                rightIcon={<Icon type="material-community" name="eye-outline" iconStyle={styles.icon}/>}
                onChangeText={text => formik.setFieldValue("pass", text)}
                errorMessage={formik.errors.pass}
            />
            <Input
                containerStyle={styles.input} placeholder='Repeat Password' secureTextEntry={true}
                rightIcon={<Icon type="material-community" name="eye-outline" iconStyle={styles.icon}/>}
                onChangeText={text => formik.setFieldValue("repeatPass", text)}
                errorMessage={formik.errors.repeatPass}
            />
            <Button title={"Registrarse"} containerStyle={styles.containerBtn} buttonStyle={styles.btn}
                    onPress={formik.handleSubmit}/>
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