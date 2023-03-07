<script setup>
import { useCounterStore } from '@/stores/CounterStore';

let counter = useCounterStore();
</script>

<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>{{ counter.count }}</p>
    <button @click="counter.increment()" :disabled="! counter.remaining">Increment ({{ counter.remaining }})</button>
    <button @click="counter.decrement()">Decrement</button>
  </div>
</template>
