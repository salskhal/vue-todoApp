<template>
  <form @submit.prevent="myTodo.addTodo">
    <input type="text" placeholder="add details" v-model="newTodo"/>
    <button>ADD</button>
  </form>
</template>





<script setup>
// import {ref, inject} from "vue"

// const store = inject("store");




import { useTodoStore } from "../store/todo.js";
import { storeToRefs } from "pinia";

const myTodo = useTodoStore();




const { newTodo } = storeToRefs(myTodo);

</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  /* margin-top: 20px; */
}

input {
  flex-grow: 1;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 10px;
  margin-right: 10px;
}

button {
  background: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  border: none;
  color: white;
  padding: 10px 30px;
}

</style>
