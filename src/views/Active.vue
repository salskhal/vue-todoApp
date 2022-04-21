<template>
  <div class="home">
    <Input />
    <TodoList v-bind:todos="activeTodo"/>
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import Input from "../components/Input.vue";
import TodoList from "../components/TodoList.vue"

const store = inject("store");

const todos = ref(store.state.counter);

const activeTodo = computed(() => {
  let selected = todos.value.filter((todo) => {
    return todo.checked === false;
  });
  return selected;
});
</script>
