<template>
  <div class="home">
    <Input />
    <TodoList v-bind:todos="task" />
  </div>
</template>
<script setup>
import Input from "../components/Input.vue";
import TodoList from "../components/TodoList.vue";
import { useTodoStore } from "../store/todo.js";
import { storeToRefs } from "pinia";

const MyTodo = useTodoStore();

const { task } = storeToRefs(MyTodo);
</script>
