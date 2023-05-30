import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/BMW.png';
import CustomInput from '../../components/CustiomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
const NewPasswordScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const onConfirmNewPasswordPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>New Password</Text>
      <CustomInput placeholder="Code" value={code} setValue={setCode} />
      <CustomInput
        placeholder="New Password"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="Confirm Password"
        onPress={onConfirmNewPasswordPressed}
        type="PRIMARY"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 60,
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10,
  },
});

export default NewPasswordScreen;
