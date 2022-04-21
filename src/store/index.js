import { reactive } from "vue"

const state = reactive({
    counter: [
        {
            id: 1,
            todoName: "Do coding challenge",
            checked: true
          },
          {
            id: 2,
            todoName: "Do coding challenge",
            checked: false
          }
    ]
})

export default {state}