import { useState } from 'react';
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined")
            return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            setStoredValue(value);
            // console.log(`LocalStorage - Setting Key: ${key}, Value:`, value);
            if (typeof window !== "undefined") {
                localStorage.setItem(key, JSON.stringify(value));
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
};
export default useLocalStorage;
