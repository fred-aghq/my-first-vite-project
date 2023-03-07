import { defineStore } from "pinia";

const max = 10;

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            (this.count < max) && this.count++;
        },
        decrement() {
            this.count--;
        }
    },
    getters: {
        remaining() {
            return max - this.count;
        }
    }
});
