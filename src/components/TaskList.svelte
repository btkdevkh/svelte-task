<script>

import { onMount } from "svelte";
import TaskItem from "./TaskItem.svelte";
import AddTaskForm from "./AddTaskForm.svelte";
import { getTasks, addTask, toggleTask, deleteTask } from '../api/apiTasks'

export let isAddTask
let tasks = []

onMount(async () => {
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
}

</script>

{#if isAddTask}
  <AddTaskForm on:onEmitAddTask={handleSubmit} />
{/if}
<div class="task-list">
  {#each tasks as task (task.id)}
    <TaskItem 
      {task} 
      on:onEmitToggleTask={handleToggleTask}
      on:onEmitDeleteTask={handleDeleteTask}
    />
  {/each}
</div>
  
<style>
.task-list {
  display: flex;
  flex-flow: column;
  gap: 5px;
}
</style>
