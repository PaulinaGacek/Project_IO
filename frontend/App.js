import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainStack from './stacks/MainStack';
import AddMeasurementScreen from './screens/AddMeasurementScreen';
import AddWorkout from './screens/AddWorkout';
import AddExerciseToWorkoutScreen from './screens/AddExerciseToWorkoutScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import Workout from './screens/WorkoutScreen';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={MainStack} />
                <Stack.Screen options={{ headerShown: false }} name="AddMeasurement" component={AddMeasurementScreen} />
                <Stack.Screen options={{ headerShown: false }} name="AddWorkout" component={AddWorkout} />
                <Stack.Screen options={{ headerShown: false }} name="AddExerciseToWorkout" component={AddExerciseToWorkoutScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Exercise" component={ExerciseScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Workout" component={Workout} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
