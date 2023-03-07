<script setup>
import { defineProps } from 'vue';

defineProps({
    modelValue: {
        type: String,
        default: ''
    }
});

let emit = defineEmits(['update:modelValue']);

const update = e => {
    emit('update:modelValue', e.target.value);
}

const onTabPress = e => {
    let t = e.target;

    let val = t.value
    let start = t.selectionStart;
    let end = t.selectionEnd;

    t.value = val.substring(0, start) + "\t" + val.substring(end);

    t.selectionStart = t.selectionEnd = start + 1;
}
</script>

<template>
    <textarea @keydown.tab.prevent="onTabPress" v-text="modelValue" @keyup.prevent="update" />
</template>
