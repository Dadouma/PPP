import { View, Text,TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        borderRadius:5,
        borderColor:'#e8E8E8',
        borderWidth:1,
        marginVertical:10,
        paddingHorizontal:10

    },
    input:{

    }

});

export default CustomInput