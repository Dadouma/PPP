import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmationEmailScreen from '../screens/ConfirmationEmailScreen/ConfirmationEmailScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import CanvasScreen from '../screens/CanvasScreen/CanvasScreen'
import DrawingNumber from '../screens/DrawingNumber/DrawingNumber'
import DrawingLetter from '../screens/DrawingLetter/DrawingLetter'
import ChooseScreen from '../screens/ChooseScreen/ChooseScreen'
import ResultLetter from '../screens/ResultScreenLetter/ResultLetter'
import ResultNumber from '../screens/ResultScreenNumber/ResultNumber'

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmationEmail" component={ConfirmationEmailScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ChooseScreen" component={ChooseScreen} />
        <Stack.Screen name="DrawingNumber" component={DrawingNumber} />
        <Stack.Screen name="DrawingLetter" component={DrawingLetter} />
        <Stack.Screen name="ResultLetter" component={ResultLetter} />
        <Stack.Screen name="ResultNumber" component={ResultNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation