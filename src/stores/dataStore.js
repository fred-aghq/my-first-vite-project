import { reactive } from "vue";

export const dataStore = reactive( { 
    name: 'the name of the thing', 
    data: [
        'one', 'two', 'three', 'four'
    ] 
});
