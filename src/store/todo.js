import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
// import { toTypeString } from "@vue/shared";
// import { totalmem } from "os";

export const useTodoStore = defineStore("task", () => {
  const task = ref([
    {
      id: 2,
      todoName: "todo",
      checked: true,
    },
  
  ]);

  
  let newTodo = ref("");

  const active = computed(() => {
    return task.value.filter((todo) => todo.checked === false);
  });
  const completed = computed(() => {
    return task.value.filter((todo) => todo.checked === true);
  });


  const addTodo = () => {
    if (newTodo.value.trim() === "") return;
    let addedTodo = {
      id: Date.now(),
      todoName: newTodo.value,
      checked: false,
    };

    task.value.push(addedTodo);
    newTodo.value = "";
  };

  const deleteTodo = (index) => {
    task.value.splice(index, 1)
  }

  if (localStorage.getItem("todos")) {
    task.value = JSON.parse(localStorage.getItem("todos"));
  }

  watch(
    task,
    (taskVal) => {
      localStorage.setItem("todos", JSON.stringify(taskVal));
    },
    { deep: true }
  );

  return { task, active, completed, addTodo, newTodo, deleteTodo };
});
