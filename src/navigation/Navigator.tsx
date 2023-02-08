import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import VoitureScreen from '../screens/CarScreen';
import DetailsScreen from '../screens/DetailsScreen';
const Stack = createStackNavigator();

function Navigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Voiture"
          component={VoitureScreen}
          options={{ title: 'Voiture' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
      
    );
  }
  export default Navigator ;
  

