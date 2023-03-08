import React from "react"
import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "react-native-elements";
export default function profileInfo(){
    return(
       <View style={styles.viewAvatar}>
           <Avatar
           size="large"
           rounded={true}
           icon={{type:"material", name:"person"}}
           containerStyle={styles.avatar}
           >
           </Avatar>
           <View>
               <Text>Correo</Text>
               <Text>Correo</Text>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    viewAvatar:{

    },
    avatar:{

    }
})