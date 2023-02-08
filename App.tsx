import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { VoitureScreen } from './src/screens/CarScreen';
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
