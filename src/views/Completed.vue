<template>
  <ul>
    <li v-for="(todo, index) in completed" :key="todo.id">
      <div>
        <input type="checkbox" v-model="todo.checked" />
        <span :class="todo.checked ? 'check' : ''">{{ todo.todoName }}</span>
      </div>

      <button class="delete" @click="store.deleteTodo(index)">
        <img src="../assets/bin.svg" alt="" />
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useTodoStore } from "../store/todo.js";
import { storeToRefs } from "pinia";
const store = useTodoStore();

const removeTodo = () =>{
  store.deleteTodo()
}
const { completed } = storeToRefs(store);
</script>

<style scoped>
.check {
  text-decoration: line-through;
  opacity: 0.5;
}

ul {
  list-style: none;
}

ul li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

span {
  margin-left: 10px;
}

.delete {
  background: red;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
