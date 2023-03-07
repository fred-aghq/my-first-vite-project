<script setup>
import { useStorage } from '@/composables/useStorage';

let food = useStorage('food', 'tacos');
let age = useStorage('age', 20);

</script>

<template>
  <main>
      <p>
        what is your favorite food? <input type="text" v-model="food"/>
      </p>
      <p>
        How old are you? <input type="number" v-model="age"/>
      </p>
  </main>
</template>
