import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/UseAuth';
import Home from '../screens/home/Home';
import History from '../screens/history/History';
import Signin from '../screens/Signin/Signin';
import Signup from '../screens/Signup/Signup';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  const { authState } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {authState?.authenticated ? (
        <>
          <Stack.Screen name="Home" component={Home} options={{ headerTitle: "Início" }} />
          <Stack.Screen name="History" component={History} options={{ headerTitle: "Histórico" }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}