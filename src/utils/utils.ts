import AsyncStorage from "@react-native-async-storage/async-storage";

export function setItem(key: string, data: any) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem(key, data);
}
export function getItem(key: string) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then((data: any) => {
            resolve(JSON.parse(data));
        });
    });
}
export function removeItem(key: string) {
    return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate() {
    return AsyncStorage.clear();
}

  