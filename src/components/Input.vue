<template>
  <form @submit.prevent="">
    <input type="text" placeholder="add details" v-model="inputValue"/>
    <button>ADD</button>
  </form>
</template>

// @submit.prevent="$emit('toAddTodo', inputValue)"



<script setup>
import {ref} from "vue"

const inputValue = ref("")


</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  margin-top: 20px;
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
