import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  ActivityIndicator,
} from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useactivity } from "../Hooks/useactivity";
import { NetworkProvider } from "react-native-offline";

export default function activityScreen() {
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
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.firsttitle}>
          here's some activities to kill boredom :)
        </Text>
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri:
                "https://www.startupdonut.co.uk/sites/default/files/ten-steps-to-developing-your-big-idea_1036354855.jpg",
            }}
          />
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    margin: 20,
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
  firsttitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 20,
    marginTop: 15,
  },
});
