import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext'; // <-- esse caminho deve bater com o nome real do arquivo
import StackRoutes from './src/routes/StackRoutes';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </AuthProvider>
  );
}
