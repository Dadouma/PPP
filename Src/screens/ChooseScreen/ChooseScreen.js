import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';

const ChooseScreen = () => {
    const navigation = useNavigation();
    const {height}=useWindowDimensions();
  return (
        <View>
        <View style={styles.home}>
        <CustomButton text="Letter Recognition" onPress={() => navigation.navigate('DrawingLetter')} type="PRIMARY"/>
        </View>
        <View style={styles.home2}>
        <CustomButton text="Number Recognition" onPress={() => navigation.navigate('DrawingScreen')} type="PRIMARY"/>
        </View>
        <View style={styles.home2}>
        <CustomButton text="Select Image" onPress={() => navigation.navigate('SelectDocumentScreen')} type="PRIMARY"/>
        </View>
        </View>
        
  )
  
}
const styles= StyleSheet.create({
    
    home:{
      alignItems:'center',
      padding:60,
      marginTop:200,
      
    },
    home2:{
      //marginTop:5,
      padding:60,
      alignItems:'center',
    },
  
  })

export default ChooseScreen