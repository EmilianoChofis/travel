import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from "../screens/IndexScreen";
import DetailsScreen from "../screens/DetailsScreen";
import InformationScreen from "../screens/InformationScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import IndexStack from "./IndexStack";
import DetailsStack from "./DetailsStack";

/*

/!*Navegacion con drawer*!/
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="index" component={IndexScreen} options={{title: "Inicio"}} />
            <Drawer.Screen name="details" component={DetailsScreen} options={{title: "Detalles"}} />
            <Drawer.Screen name="info" component={InformationScreen} options={{title: "Informacion"}} />
        </Drawer.Navigator>
    );
}
*/


/*Navegacion con uso de Tabs*/
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="index" component={IndexStack} options={{title: "Inicio"}} />
            <Tab.Screen name="details" component={DetailsStack} options={{title: "Detalles"}} />
            <Tab.Screen name="info" component={InformationScreen} options={{title: "Informacion", headerShown: true}} />
        </Tab.Navigator>
    );
}

/*Uso de navegacion con Stack*/

/*
const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="index" component={IndexScreen} options={{title:"Inicio"}}/>
          <Stack.Screen name="details" component={DetailsScreen} options={{title:"Detalles"}}/>
          <Stack.Screen name="info" component={InformationScreen} options={{title:"Informacion"}}/>
      </Stack.Navigator>
  )
}*/
