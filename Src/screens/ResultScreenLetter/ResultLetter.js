import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const ResultLetter = ({route}) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result Letter</Text>
      <Text>{route.params.paramKey}</Text>
      <View>
      <Image source={{uri:route.params.paramKey}} style={{width: 800, height: 300}} />
    </View>
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

export default ResultLetter