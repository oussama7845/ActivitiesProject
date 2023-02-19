import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useactivity } from "../Hooks/useactivity";
import { NetworkProvider } from "react-native-offline";

export default function ActivityScreen() {
  const { data, status, error, refetch } = useactivity();
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    refetch().then(() => setLoading(false));
  };

  if (status === "loading") {
    return <Text>Loading Activities...</Text>;
  }

  if (error) {
    return <Text>An error occurred while loading activities</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/activity.png")}
        style={styles.imageBackground}
      >
        <SafeAreaView style={styles.safeContainer}>
      
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.title}>* {data.activity} *</Text>
              <View style={styles.details}>
                <Text style={styles.detailsText}>Type: {data.type}</Text>
                <Text style={styles.detailsText}>
                  Participants: {data.participants}
                </Text>
                <Text style={styles.detailsText}>Price: {data.price} $ </Text>
              </View>
              <Button
                style={styles.button}
                mode="contained"
                onPress={handleRefresh}
                loading={loading}
              >
                another one :)
              </Button>
            </View>
          </Card>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  card: {
    margin: 5,
    marginTop: 150,
    borderRadius: 10,
    elevation: 5,
  },
  cardContent: {
    margin: 15,
  
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    marginTop: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 85,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
  },
});
