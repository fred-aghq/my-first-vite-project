import { ref, watch } from "vue";

export function useStorage(key, defaultVal = null) {
    const write = () => {
        if (val.value === '') {
            removeItem();
        } else {
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    const read = () => {
        return JSON.parse(localStorage.getItem(key));
    }

    let val;
    let storedValue = read();


    if (storedValue){
        val = ref(storedValue);
    }
    else {
        val = ref(defaultVal);
    }

    write();


    const removeItem = () => localStorage.removeItem(key);

    watch(val, write);

    return val;
}
