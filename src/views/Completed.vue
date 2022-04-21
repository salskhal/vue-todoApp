<template>
  <ul>
     <li v-for="todo in store.state.counter" :key="todo.id">
        <span>{{ todo.todoName }}</span>
        <button>❌</button>
      </li> 
  </ul>
  <button>Delete all</button>
</template>

<script setup>
import { inject } from "vue";

const store = inject("store");
</script>

<style scoped>

</style>

