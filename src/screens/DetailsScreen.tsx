import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, FlatList, StatusBar, Text,View, ActivityIndicator } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useModel } from "../Hooks/useModel";
import { NetworkProvider } from 'react-native-offline';




function Details( props :any ) {
  //const { name } = route.params;

console.log(result)
  return (

    <Text>Ici</Text>

  );    
}



export  const DetailsScreen = ({ navigation }:any,props:any) => { 
  const name=props.route.params.codigo

    const DetailsRenderer  = ({ item } : any) => {
        return(
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F11%2Ffiles%2F2020%2F03%2Fhyundai-prophecy-concept-5.jpg?q=75&w=800&cbr=1&fit=max' }} />
          <Card.Content>
            <Text style={styles.title}>{item.nome}</Text>
          </Card.Content>
        </Card>
        );
    }

    const DetailsList = ({item}:any) => {
      const { data, status, error } = useModel(name)

      if (status === "loading") {
        return <Text>Loading Voiture...</Text>;
      }
    
      if (error) {
        return <Text>An error occured while loading Voiture</Text>;
      }
      return (
        <FlatList
          data={data}
          renderItem={DetailsRenderer}
          keyExtractor={item => item.nome}
        />
      );
    };

    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <DetailsList/>
        </View>
      </SafeAreaView>
    );
    
};



const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'grey',
  },
  container: {
    backgroundColor:'black',
    flex:1,
    paddingHorizontal: 20,
    marginTop: 20,
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
export default DetailsScreen;



