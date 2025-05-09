import * as SecureStore from 'expo-secure-store';

// Buscar item
export async function getStorageItem(key: string): Promise<string | null> {
    try {
        const value = await SecureStore.getItemAsync(key);
        return value;
    } catch (error) {
        console.error("Erro ao buscar item do SecureStore:", error);
        return null;
    }
}

// Salvar item
export async function setStorageItem(key: string, value: string): Promise<void> {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.error("Erro ao salvar item no SecureStore:", error);
    }
}

// Remover item
export async function removeStorageItem(key: string): Promise<void> {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.error("Erro ao remover item do SecureStore:", error);
    }
}
