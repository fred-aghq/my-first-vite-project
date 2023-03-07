import { reactive } from "vue";

export const counterStore = reactive({
    // state
    count: 0,

    // action
    increment() {
        this.count++;
    },

    decrement() {
        this.count--;
    }
});
