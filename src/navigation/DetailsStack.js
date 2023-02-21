import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from "../screens/IndexScreen";
import LoginScreen from "../screens/LoginScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();
export default function DetailsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="detailsS" component={DetailsScreen} options={{title:"Detalles"}}/>
            <Stack.Screen name="loginS" component={LoginScreen} options={{title:"Login"}}/>

        </Stack.Navigator>
    )
}