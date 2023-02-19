import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function AccueilScreen({ navigation }: any) {
  return (
    <ImageBackground
    source={require("../../assets/backgroundImage.jpg")}
    style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to your application</Text>
        <Text style={styles.paragraph}>
          Discover a completely redesigned application to offer you a better user
          experience and simplified use. This application is intended for those
          who are bored and want suggestions on activities to do.
        </Text>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate("activity")}
        >
          Let's start
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#684287",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 18,
  },
  button: {
    marginTop: 30,
    marginLeft: 230,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
