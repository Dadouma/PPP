import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React, { useState }  from 'react'
import Logo from '../../../assets/images/BMW.png'
import CustomInput from '../../components/CustiomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const ResetPasswordScreen = () => {
    const [email,setEmail]=useState('')
    const onSendMailPressed=()=>{console.warn('Send Mail Pressed')};
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Password</Text>
      <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
      <CustomButton  text="Send Mail" onPress={onSendMailPressed} type="PRIMARY"/> 
         
    </View>
  )
}
const styles= StyleSheet.create({
    root:{
      alignItems:'center',
      padding:60,
      flex:1,
      backgroundColor:'#F9FBFC',
    },
    title:{
      fontSize:30,
      fontWeight:'bold',
      padding:10,
      marginBottom:10,
  },
  
  })

export default ResetPasswordScreen