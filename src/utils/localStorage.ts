import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar item
export async function getStorageItem(item: string): Promise<string | null> {
    try {
        const value = await AsyncStorage.getItem(item);
        return value;
    } catch (error) {
        console.error("Erro ao buscar item do AsyncStorage:", error);
        return null;
    }
}

// Salvar item
export async function setStorageItem(item: string, value: string): Promise<void> {
    try {
        await AsyncStorage.setItem(item, value);
    } catch (error) {
        console.error("Erro ao salvar item no AsyncStorage:", error);
    }
}

// Remover item
export async function removeStorageItem(item: string): Promise<void> {
    try {
        await AsyncStorage.removeItem(item);
    } catch (error) {
        console.error("Erro ao remover item do AsyncStorage:", error);
    }
}
