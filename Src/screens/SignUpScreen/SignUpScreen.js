import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React, { useState }  from 'react'
import Logo from '../../../assets/images/BMW.png'
import CustomInput from '../../components/CustiomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const SignUpScreen = () => {
  const onSignUpPressed=()=>{console.warn('Sign Up Pressed')};
  const onForgotPasswordPressed=()=>{console.warn('Forgot Password Pressed')};
  const onFacebookPressed=()=>{console.warn('Facebook Pressed')};
  const onGooglePressed=()=>{console.warn('Google Pressed')};
  const onApplePressed=()=>{console.warn('Apple Pressed')};
  const onHaveAccountPressed=()=>{console.warn('Have Account Pressed')};
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const[passwordRepeat,setPasswordRepeat]=useState('');
  const [email,setEmail]=useState('');
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomInput placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
      <CustomButton  text="Sign up" onPress={onSignUpPressed} type="PRIMARY"/>
      <CustomButton  text="Sign up with Facebook" onPress={onFacebookPressed} bgColor="#E7EAF4" fgColor="#4765A9"/>
      <CustomButton  text="Sign up with Google" onPress={onGooglePressed} bgColor="#FAE9EA" fgColor="#DD4D44"/>
      <CustomButton  text="Sign up with Apple" onPress={onApplePressed} bgColor="#e3e3e3" fgColor="#363636"/>
        <CustomButton  text="Already have an account? Sign in" onPress={onHaveAccountPressed} type="TERTIARY"/>
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
  title:{
    fontSize:24,
    fontWeight:'bold',
    padding:10,
    marginBottom:10,
},

})
export default SignUpScreen
