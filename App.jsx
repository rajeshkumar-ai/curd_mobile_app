import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './src/navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import ItemProvider from './src/context/ItemContext';

const App = () => {
  return (
    <ItemProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <TabNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ItemProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
