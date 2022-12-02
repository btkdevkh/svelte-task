<script>

import { onMount, onDestroy } from "svelte";
import { fade, scale } from "svelte/transition";
import { flip } from "svelte/animate";
import TaskItem from "./TaskItem.svelte";
import AddTaskForm from "./AddTaskForm.svelte";
import { getTasks, addTask, toggleTask, deleteTask } from '../api/apiTasks'
// import TaskStore from '../stores/TaskStore'

export let isAddTask
export let handleClick
let tasks = []

// first load with store data
// const unsub = TaskStore.subscribe(data => tasks = data)
// onDestroy(() => unsub())

// get data from database
onMount(async() => {
  tasks = await getTasks()
})

const handleDeleteTask = (e) => {
  const id = e.detail
  deleteTask(id)
  tasks = tasks.filter(t => t.id !== id)
}

const handleToggleTask = (e) => {
  const task = e.detail
  task.completed = !task.completed 
  toggleTask(task)
  tasks = tasks.filter(t => t.id === task.id ? {...t, completed: task.completed} : task)
}

const handleSubmit = (e) => {
  const task = e.detail
  addTask(task)
  tasks = [...tasks, task]
  handleClick()
}

</script>

{#if isAddTask}
  <AddTaskForm on:onEmitAddTask={handleSubmit} />
{/if}
<div class="task-list">
  {#each tasks as task (task.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <TaskItem 
        {task} 
        on:onEmitToggleTask={handleToggleTask}
        on:onEmitDeleteTask={handleDeleteTask}
      />
    </div>
  {/each}
</div>
  
<style>
.task-list {
  display: flex;
  flex-flow: column;
  gap: 5px;
}
</style>
