import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import DocumentPicker from 'react-native-document-picker';
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
const  SelectDocumentScreen = () => {
  const[ImgUrl, setImgUrl] = useState("");
  const navigation = useNavigation();
 
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
         type: [DocumentPicker.types.images],
       });
      setImgUrl(doc[0].uri);
      console.log(doc);
      console.log(ImgUrl);
    } catch(err) {
      if(DocumentPicker.isCancel(err)) {
        console.log("User cancelled the upload", err);
      }else {
        throw err;
    }
  }}
  const next = () => {
    navigation.navigate('ResultLetter', { paramKey: ImgUrl });
  }

  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          textAlign: 'center',
          marginVertical: 40,
        }}>
        Document Picker
      </Text>
      
      <View style={{marginHorizontal: 40}}>
        <CustomButton  text="Select Document" onPress={selectDoc} type="PRIMARY"/>
        <CustomButton  text="next" onPress={next} type="PRIMARY"/>
      </View>
    </View>
  );
}


export default  SelectDocumentScreen