import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (token,id) => {
    await AsyncStorage.setItem("token",token);
    await AsyncStorage.setItem("id",`${id}`);
};

const storeid = async (token) => {
    await AsyncStorage.setItem("userid", token);
};

const getToken = async () => {
    const value = await AsyncStorage.getItem("token");
    return value;
};


const getUser = async () => {
    const value = await AsyncStorage.getItem("id");
    return value;
};

const removeToken = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("id");
};

export { storeToken, getToken, removeToken,storeid,getUser};