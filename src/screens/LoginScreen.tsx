import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen({ navigation }:any) {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  function toggleSecureIcon() {
    setIsVisible(!isVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_121110878_970642970450047_57450.jpg' }}
        />
        <Text style={styles.title}>Welcome Back!</Text>
      </View>

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
      <Button style={styles.button} mode="contained" onPress={() => navigation.navigate("accueil")}>
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
    margin: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    zIndex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  button: {
    width: 200,
    alignSelf: 'center',
    marginTop: 15,
  },
  terms: {
    alignSelf: 'center',
    marginTop: 15,
  }
});
