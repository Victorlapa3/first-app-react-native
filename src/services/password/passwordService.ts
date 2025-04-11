import { getStorageItem, setStorageItem } from "../../utils/localStorage";

export const generatePassword = () => {
        const length = 12;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };
export const savePassword = async (password: string) =>{
    try{
        await setStorageItem("password", password);
    } catch(error){
        console.log(error);
    }
};
export const getPassword = async () => {
    try{
        const password = await getStorageItem("password");
        return password;
    } catch(error){
        console.log(error);
    }
};
