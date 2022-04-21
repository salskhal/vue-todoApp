<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.checked" />
      <span :class="todo.checked ? 'checked' : ''">{{ todo.todoName }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  todos: Object,
});
</script>

<style scoped>
ul {
  list-style: none;
  margin-top: 20px;
}

ul li {
  margin-bottom: 10px;
}

.checked {
  text-decoration: line-through;
  opacity: 0.5;
}
span{
    margin-left: 10px;
}
</style>
