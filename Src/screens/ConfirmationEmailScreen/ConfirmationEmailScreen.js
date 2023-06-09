import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/BMW.png';
import CustomInput from '../../components/CustiomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ConfirmationEmailScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const onBacktoSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendCodePressed = () => {
    Alert.alert('Resend Code', 'Code has been sent');
  };
  const onConfirmPressed = () => {
    Alert.alert('Confirm', 'Account has been created');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Email</Text>
      <CustomInput placeholder="Code" value={code} setValue={setCode} />
      <CustomButton text="Confirm" onPress={onConfirmPressed} type="PRIMARY" />
      <CustomButton
        text="Resend Code"
        onPress={onResendCodePressed}
        type="SECONDARY"
      />
      <CustomButton
        text="Back to Sign In"
        onPress={onBacktoSignInPressed}
        type="TERTIARY"
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

export default ConfirmationEmailScreen;
