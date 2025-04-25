import { View, Text, StyleSheet } from 'react-native';
import api from '../utils/api';
import { useEffect, useState } from 'react';

export default function TestApi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = () => {
            api.get("https://pokeapi.co/api/v2/pokemon/charizard")
                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch((error) => {
                    console.error("Erro ao buscar dados:", error);
                });
        };

        getData();
    }, []);

    return (
        <View style={styles.container}>
            {data && <Text style={styles.namePokemonText}>{data.name}</Text>}

            <Text style={styles.PowerPokemonText}>Poderes</Text>
            <View>
                {data?.abilities.map((ability) => (
                    <Text key={ability.ability.name}>- {ability.ability.name}</Text>
                )
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    namePokemonText: {
        color: 'black',
        fontSize: 72,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    PowerPokemonText: {
        color: 'black',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

