import { NavigationContainer } from "@react-navigation/native"
import Home from "./src/screens/home/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{ headerTitle: "Início" }}></Stack.Screen>

        {/* <Stack.Screen name="history" component={Home} options={{ headerTitle: "Histórico" }}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
