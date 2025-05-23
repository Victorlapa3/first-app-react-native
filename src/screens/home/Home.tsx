import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { generatePassword } from '../../services/password/PasswordService';
import { signout } from '../../services/auth/AuthService';



export default function Home({ navigation }) {
  const [password, setPassword] = useState('');

  const handleGenerate = async () => {
    const result = await generatePassword();
    setPassword(result);
  };

  const handleLogout = async () => {
    await signout();
    navigation.replace('Signin');
  };

  const handleCopy = async () => {
    if (password) await Clipboard.setStringAsync(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sua senha</Text>
      <Text style={styles.password}>{password}</Text>
      <Pressable style={styles.button} onPress={handleGenerate}><Text style={styles.buttonText}>Gerar</Text></Pressable>
      <Pressable style={styles.button} onPress={handleCopy}><Text style={styles.buttonText}>Copiar</Text></Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('History')}><Text style={styles.buttonText}>Histórico</Text></Pressable>
      <Pressable style={styles.button} onPress={handleLogout}><Text style={styles.buttonText}>Sair</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  password: { fontSize: 18, marginBottom: 20, color: '#333' },
  button: { backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginVertical: 5 },
  buttonText: { color: '#fff' }
});