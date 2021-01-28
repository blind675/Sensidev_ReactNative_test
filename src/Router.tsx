import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Screens} from "./Constants";
import MainScreen from "./screens/MainScreen";
import DetailsScreen from "./screens/DetailsScreen";

export default function Router() {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name={Screens.main} component={MainScreen} options={{headerShown: false}}/>
                <Stack.Screen name={Screens.details} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
