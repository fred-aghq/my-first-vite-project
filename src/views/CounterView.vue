<script setup>
import { counterStore } from '@/stores/counterStore';

let counter = counterStore;
</script>

<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>{{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>
