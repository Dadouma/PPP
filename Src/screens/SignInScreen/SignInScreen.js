import { View, Text,Image,StyleSheet,useWindowDimensions, ScrollView } from 'react-native'
import React, { useState }  from 'react'
import Logo from '../../../assets/images/BMW.png'
import CustomInput from '../../components/CustiomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const Navigation=useNavigation();
  const onSignInPressed=()=>{
    Navigation.navigate('ChooseScreen')};
  const onForgotPasswordPressed=()=>{
    console.warn('Forgot Password Pressed');
    Navigation.navigate('ResetPassword')
  };
  const onFacebookPressed=()=>{console.warn('Facebook Pressed')};
  const onGooglePressed=()=>{console.warn('Google Pressed')};
  const onApplePressed=()=>{console.warn('Apple Pressed')};
  const onCreateAccountPressed=()=>{
    console.warn('Create Account Pressed')
    Navigation.navigate('SignUp')};
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const {height}=useWindowDimensions();
  return (
    <ScrollView>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo,{height:height*0.3}]} resizeMode='contain'/>
      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton  text="Sign In" onPress={onSignInPressed} type="PRIMARY"/>
      <CustomButton  text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY"/>
      <CustomButton  text="Sign In with Facebook" onPress={onFacebookPressed} bgColor="#E7EAF4" fgColor="#4765A9"/>
      <CustomButton  text="Sign In with Google" onPress={onGooglePressed} bgColor="#FAE9EA" fgColor="#DD4D44"/>
      <CustomButton  text="Sign In with Apple" onPress={onApplePressed} bgColor="#e3e3e3" fgColor="#363636"/>
      <CustomButton  text="Don't have an account? Create one" onPress={onCreateAccountPressed} type="TERTIARY"/>

    </View>
    </ScrollView>
  )
}
const styles= StyleSheet.create({
  logo:{
    width:'80%',
    maxWidth:300,
    maxHeight:200,
  },
  root:{
    alignItems:'center',
    padding:60,
  },

})
export default SignInScreen
