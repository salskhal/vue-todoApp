<template>
  <div class="home">
    <Input />
    <TodoList v-bind:todos="todos"/>
  </div>
</template>
<script setup>
import Input from "../components/Input.vue";
import TodoList from "../components/TodoList.vue"
import { inject, ref } from "vue";

const store = inject("store");

const todos = ref(store.state.counter)

</script>
