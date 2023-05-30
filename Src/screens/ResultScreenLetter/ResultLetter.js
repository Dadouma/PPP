import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ResultLetter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result Letter</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default ResultLetter;
