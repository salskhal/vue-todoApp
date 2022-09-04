// import { computed, watch } from "@vue/reactivity"

// import { json } from "body-parser"

import { reactive, computed, watch, onMounted } from "vue"
// import { computed, onMounted, watch } from "@vue/runtime-core";

onMounted(() =>{
  state.counter = JSON.parse(localStorage.getItem("todos")) || []
})

const state = reactive({
    counter: [
        
    ],
    newTodo : "",
})


watch(state.counter, (newVal) =>{
  localStorage.setItem("todos", JSON.stringify(newVal))
}, {deep: true})


const methods = {
  addNewTodo(){
    if (state.newTodo === "") return 
    let addedTodo = {
           id: Date.now(),
           todoName: state.newTodo,
           checked: false
          }
          
          state.counter.push(addedTodo)
          state.newTodo = ""
        },
        deleteTodo(index){
    state.counter.splice(index, 1)
  }
}


export default {state, methods}