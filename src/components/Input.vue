<template>
  <form @submit.prevent="store.methods.addNewTodo">
    <input type="text" placeholder="add details" v-model="store.state.newTodo"/>
    <button>ADD</button>
  </form>
</template>





<script setup>
import {ref, inject} from "vue"

const store = inject("store");

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
