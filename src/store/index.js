import { reactive } from "vue"

const state = reactive({
    counter: [
        {
            id: 1,
            todoName: "One",
            checked: true
          },
          {
            id: 2,
            todoName: "Two",
            checked: false
          },
          {
            id: 3,
            todoName: "Three",
            checked: true
          },
          {
            id: 4,
            todoName: "Four",
            checked: false
          },
    ],
    newTodo : ""
})


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