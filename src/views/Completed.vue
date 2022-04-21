<template>
  <ul>
    <li v-for="(todo, index) in completedTodo" :key="todo.id">
      <div>
        <input type="checkbox" v-model="todo.checked" />
        <span :class="todo.checked ? 'check' : ''">{{ todo.todoName }}</span>
      </div>

      <button class="delete" @click="store.methods.deleteTodo(index)">
        <img src="../assets/bin.svg" alt="">
      </button>
    </li>
  </ul>
</template>

<script setup>
import { inject, computed, ref } from "vue";

const store = inject("store");

const todos = ref(store.state.counter);

const completedTodo = computed(() => {
  let selected = todos.value.filter((todo) => {
    return todo.checked === true;
  });
  return selected;
});

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

.delete{
    background: red;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
