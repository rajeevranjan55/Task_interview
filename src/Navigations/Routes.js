import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import Profile from "../Screens/Profile";
import Interest from "../Screens/Interest";
const stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Profile" component={Profile} />
        <stack.Screen name="Interest" component={Interest} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Routes;
