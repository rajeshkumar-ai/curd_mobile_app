import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from "./src/screens/HomeScreen"

const App = () => {
  return (
    
   <SafeAreaView style={{flex:1}}>
      <HomeScreen/>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})