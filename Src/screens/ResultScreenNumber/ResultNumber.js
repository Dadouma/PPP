import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ResultNumber = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>Result Number</Text>
      
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        padding:40,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
    },
})
export default ResultNumber