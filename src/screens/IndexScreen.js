import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import DetailsStack from "../navigation/DetailsStack";

export default function IndexScreen(props) {
    console.log(props);
    const {navigation}=props
    const {navigate}=navigation
  return (
    <View>
      <Text>IndexScreen</Text>
        <Button title='ir a detalles' onPress={()=>navigate("details")}></Button>
        <Button title='ir a info' onPress={()=>navigate("info")}></Button>
        <Button title='ir a Login' onPress={()=>navigate("details",{screen:"loginS"})}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})