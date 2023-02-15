import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, View, ActivityIndicator } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useVoiture } from "../Hooks/useVoiture";
import { NetworkProvider } from 'react-native-offline';



export  const VoitureScreen = ({ navigation }:any) => { 
    const VoitureRenderer  = ({ item } : any) => {
        return(
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F11%2Ffiles%2F2020%2F03%2Fhyundai-prophecy-concept-5.jpg?q=75&w=800&cbr=1&fit=max' }} />
          <Card.Content>
            <Text style={styles.title}>{item.nome}</Text>
          </Card.Content>
          <Card.Actions style={styles.button}>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate("Details", item)}>
  Check
</Button>

          </Card.Actions>
        </Card>
        );
    }

    const VoitureList = () => {
      const { data, status, error } = useVoiture();
      
    
      if (status === "loading") {
        return <Text>Loading Voiture...</Text>;
      }
    
      if (error) {
        return <Text>An error occured while loading Voiture</Text>;
      }
    


      return (
        <FlatList
          data={data}
          renderItem={VoitureRenderer}
          keyExtractor={item => item.nome}
        />
      );
    };

    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <VoitureList/>
        </View>
      </SafeAreaView>
    );
    
};



const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor:'grey',
  },
  container: {
    backgroundColor:'black',
    flex:1,
    paddingHorizontal: 20,
    textDecorationColor:'black'
  },
  block:{
    padding:20,
    margin:10,
    backgroundColor:'white',
    borderRadius:20,
  },
  card: {
    marginBottom: 20,
  },
  title: {
    marginTop:10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    color: 'black',
    fontSize: 16,
  },
  button: {
    margin: 'auto',
  },
});
export default VoitureScreen;
