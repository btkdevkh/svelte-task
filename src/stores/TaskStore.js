import { writable } from 'svelte/store'

const TaskStore = writable([
  {
    id: 1,
    name: 'Go to Ana\'s house',
    date: '2022-12-03',
    completed: false
  },
])

export default TaskStore
