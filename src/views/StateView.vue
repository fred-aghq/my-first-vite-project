<script setup>
import { dataStore } from '@/stores/dataStore';
let state = dataStore;
</script>

<template>
    <div>
        <h1>State</h1>
        <p>{{ state.name }}</p>
        <ul>
            <li v-for="(item, index) in state.data" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
