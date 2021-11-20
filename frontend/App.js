import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ExerciseScreen from './screens/ExerciseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Exercise" component={ExerciseScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
