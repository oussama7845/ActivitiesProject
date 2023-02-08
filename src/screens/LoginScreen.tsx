import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button } from 'react-native-paper';

export default function App({ navigation }:any) {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  function toggleSecureIcon() {
    setIsVisible(!isVisible);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Discover our Vi</Text>

      <View style={{ margin: 10 }}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{ margin: 10 }}>
        <TextInput
          label="Password"
          value={pass}
          secureTextEntry={isVisible}
          onChangeText={(value) => setPassword(value)}
          mode='outlined'
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              icon={isVisible ? "eye-off" : "eye"}
            />
          }
        />
      </View>
      <Button style={styles.button} mode="contained" onPress={() => navigation.navigate("Voiture")}>
        Login
      </Button>
      <Text style={styles.terms}>Terms and Conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
  },

  button: {
    width: 200,
    marginLeft: 100,
    marginTop: 15,
  },
  terms: {
    marginLeft: 130,
  }
})