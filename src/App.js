import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GetStarted, Splash } from './pages'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    // <Splash />
    <NavigationContainer>
      <Router />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({

})
