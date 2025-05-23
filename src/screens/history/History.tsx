import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { deletePassword, getPasswords } from '../../services/password/PasswordService';


export default function History() {
  const [passwords, setPasswords] = useState([]);

  const loadPasswords = async () => {
    const data = await getPasswords();
    setPasswords(data);
  };

  const handleDelete = async (id) => {
    await deletePassword(id);
    loadPasswords();
  };

  useEffect(() => {
    loadPasswords();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Senhas</Text>
      <FlatList
        data={passwords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.value}</Text>
            <Pressable onPress={() => handleDelete(item.id)} style={styles.delete}><Text>X</Text></Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#eee', borderRadius: 5, marginBottom: 10 },
  text: { fontSize: 16 },
  delete: { backgroundColor: 'red', paddingHorizontal: 10, borderRadius: 3 }
});
