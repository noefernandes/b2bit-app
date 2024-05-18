import { useState } from "react";

interface UserData {
    key: string;
    data: any;
}

export const useLocalStorage = (props: UserData) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(props.key);
            if (value) {
                return value;
            } else {
                window.localStorage.setItem(props.key, props.data);
                return props.data;
            }
        } catch (err) {
            return props.data;
        }
    });
    const setValue = (newValue: any) => {
        try {
            window.localStorage.setItem(props.key, newValue);
        } catch (err) {
            console.log(err);
        }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
};