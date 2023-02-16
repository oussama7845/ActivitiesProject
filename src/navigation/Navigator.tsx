import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import activityScreen from '../screens/activityScreen';
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
          name="activity"
          component={activityScreen}
          options={{ title: 'activity' }}
        />

      </Stack.Navigator>
      
    );
  }
  export default Navigator ;
  

