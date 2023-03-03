<script setup>
import { ref } from "vue";
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();

let message = ref('Hello Vue 3 + Vite');

let changeMessage = () => message.value = 'I was changed';

setTimeout(changeMessage, 2000);
</script>

<template>
  <main>
    {{ message }}
    <button @click="flash('hi!', 'This is the home page.')">Flash</button>
    <input v-model="message" />
  </main>
</template>
