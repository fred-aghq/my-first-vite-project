import { ref, watch } from "vue";

export function useStorage(key, defaultVal = null) {
    let val;
    let storedValue = localStorage.getItem(key);

    if (storedValue){
        val = ref(storedValue);
    }
    else {
        val = ref(defaultVal);
    }

    write();

    function write() {
        if (val.value === '') {
            removeItem();
        } else {
            localStorage.setItem(key, val.value);
        }
    }

    const removeItem = () => localStorage.removeItem(key);

    watch(val, () => write());

    return val;
}
