import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ActivityScreen from "../screens/ActivityScreen";
import AccueilScreen from "../screens/AccueilScreen";
const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="accueil"
        component={AccueilScreen}
        options={{ title: "accueil" }}
      />
      <Stack.Screen
        name="activity"
        component={ActivityScreen}
        options={{ title: "activity" }}
      />
    </Stack.Navigator>
  );
}
export default Navigator;
