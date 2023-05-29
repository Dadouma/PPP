import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Navigation from './Src/Navigation/Navigation';
import axios from 'axios';

const App=() =>{
  async function login() {
    try {
      const response = await axios.get('http://localhost:3000/auth/login');
      // Handle the response data
      console.log(response.data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  }

    return (
      <SafeAreaView style={styles.root}>
        <Navigation/>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    root:{
      flex:1,
      backgroundColor:'#F9FBFC',
      
    }
  });
  
  export default App;