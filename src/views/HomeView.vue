<script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue';
import { useCounterStore } from '@/stores/CounterStore';
import { ref } from 'vue';

let comment = ref('test value');
const count = useCounterStore().count

</script>

<template>
  <main>
    <h1>The current count is {{  count }}</h1>
    <form>
      <TabbableTextarea v-model="comment" style="width:100%; height:300px;" />
    </form>
  </main>
</template>
