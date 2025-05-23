import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function Signup({ navigation }) {
  const { onRegister } = useContext(AuthContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
  });
  const [error, setError] = useState('');

  const handleChange = (field, value) => setData({ ...data, [field]: value });

  const handleSignup = async () => {
    if (data.password !== data.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    try {
      await onRegister(data);
    } catch (err) {
      setError('Erro ao cadastrar.');
    }
  };

  const allFilled = Object.values(data).every((v) => v);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput placeholder="Nome" value={data.name} onChangeText={(v) => handleChange('name', v)} style={styles.input} />
      <TextInput placeholder="Email" value={data.email} onChangeText={(v) => handleChange('email', v)} style={styles.input} />
      <TextInput placeholder="Data de Nascimento (yyyy-mm-dd)" value={data.birthdate} onChangeText={(v) => handleChange('birthdate', v)} style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry value={data.password} onChangeText={(v) => handleChange('password', v)} style={styles.input} />
      <TextInput placeholder="Confirmar Senha" secureTextEntry value={data.confirmPassword} onChangeText={(v) => handleChange('confirmPassword', v)} style={styles.input} />
      {!!error && <Text style={styles.error}>{error}</Text>}
      <Pressable style={[styles.button, !allFilled && styles.disabled]} onPress={handleSignup} disabled={!allFilled}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
      <Text onPress={() => navigation.navigate('Signin')} style={styles.link}>Já tem conta? Entrar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff' },
  disabled: { backgroundColor: '#aaa' },
  error: { color: 'red', marginBottom: 10 },
  link: { marginTop: 10, color: 'blue', textAlign: 'center' },
});
