import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import unlock from '../../../assets/unlock.png';
import padlock from '../../../assets/padlock.png';
import { generatePassword } from '../../services/password/passwordService';


export default function Home({ navigation }) {
    const [password, setPassword] = useState('');

    

    const copyToClipboard = async () => {
        if (password) {
            await Clipboard.setStringAsync(password)
                .then(() => {
                    console.log('Senha copiada para a área de transferência!', password);
                })
                .catch(err => {
                    console.error('Erro ao copiar a senha: ', err);
                });
        }
    }

    const handleRefresh = () => {
        setPassword('');
    }

    const changeRoute = () => {
        navigation.navigate("History");
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: "#0075C1", fontWeight: 'bold', fontSize: 30 }}>GERADOR DE SENHA</Text>

            <Image
                source={password ? unlock : padlock}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={[styles.buttonText, styles.buttonPassword, { fontSize: 20 }]}>
                {password ? password : "Senha não gerada"}
            </Text>

            <Pressable style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>GERAR</Text>
            </Pressable>

            <Pressable
                style={[styles.button, { backgroundColor: password ? '#0075C1' : '#004775' }]}
                onPress={copyToClipboard}
                disabled={!password}
            >
                <Text style={styles.buttonText}>COPIAR</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={changeRoute}>
                <Text style={styles.buttonText}>HISTÓRICO</Text>
            </Pressable>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Pressable style={styles.button} onPress={handleRefresh}>
                    <Text style={styles.buttonText}>ATUALIZAR</Text>
                </Pressable>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0075C1',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        width: 300,
    },
    buttonPassword: {
        backgroundColor: '#00C2FF',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        width: 300,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
