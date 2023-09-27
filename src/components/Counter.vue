<script setup>
import { store } from '../store.js'
</script>

<template>
  <div>
    <button @click="store.incrementA()">
      Counter A: {{ store.countA }}
    </button>
    <button @click="store.incrementB()">
      Counter B: {{ store.countB }}
    </button>
  </div>
</template>