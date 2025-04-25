import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/home/Home";
import History from "./src/screens/history/History";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestApi from "./src/testApi/TestApi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="TestApi" 
          component={TestApi} 
          options={{
            headerBackVisible: false,
          }} 
        />
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{ headerTitle: "Início" }} 
        />
        <Stack.Screen 
          name="history" 
          component={History} 
          options={{ headerTitle: "Histórico" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
