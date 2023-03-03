<script setup>
import { onMounted, ref } from "vue";

let message = ref('Hello Vue 3 + Vite');

let changeMessage = () => message.value = 'I was changed';

setTimeout(changeMessage, 2000);
</script>

<template>
  <main>
    {{ message }}
    <input v-model="message" />
    <TheWelcome />
  </main>
</template>
