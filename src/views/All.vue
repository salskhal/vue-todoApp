<template>
  <div class="home">
    <Input />
    <ul>
      <li v-for="todo in store.state.counter" :key="todo.id">
        <input type="checkbox" v-model="todo.checked" />
        <span>{{ todo.todoName }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import Input from "../components/Input.vue";
import { inject } from "vue";

const store = inject("store");
</script>
