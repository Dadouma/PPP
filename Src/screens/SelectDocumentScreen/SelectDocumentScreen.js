import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
//import DocumentPicker from 'react-native-document-picker';
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
const SelectDocumentScreen = () => {
  const [ImgUrl, setImgUrl] = useState("");
  const navigation = useNavigation();
  const options = {
    title: 'Select Image',
    type: 'Photos',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    }
  }

  const selectDoc = async () => {
    const images = await launchImageLibrary(options);
    console.log(images.assets[0]);
    const formdata = new FormData();
    formdata.append("file"
      , {
        uri: images.assets[0].uri,
        type: images.assets[0].type,
        name: images.assets[0].fileName,
      }
    );
    const url = "http://localhost:3000/file";
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formdata,
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log("tnekna");
    }
  }
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

      <View style={{ marginHorizontal: 40 }}>
        <CustomButton text="Select Document" onPress={selectDoc} type="PRIMARY" />
        <CustomButton text="next" onPress={next} type="PRIMARY" />
      </View>
    </View>
  );
}


export default SelectDocumentScreen