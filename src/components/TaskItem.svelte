<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher()
const onEmitToggleTask = (task) => dispatch('onEmitToggleTask', task)
const onEmitDeleteTask = (id) => dispatch('onEmitDeleteTask', id)

export let task

const formatDate = () => {
  const date = new Date(task.date)
  const stringDateArr = date.toString().split(' ')
  return `${stringDateArr[2]} ${stringDateArr[1]} ${stringDateArr[3]}`
}

</script>
  
<div class="task-item {task.completed && 'completed'}">
  <div>
    <strong>{task.name}</strong> | <small>{formatDate()}</small>
  </div>
  <div class="buttons">
    <button 
      class="btn-update {task.completed && 'completed-btn'}" 
      on:click={onEmitToggleTask(task)}
    >&#10003;</button>
    <button 
      class="btn-delete" 
      on:click={onEmitDeleteTask(task.id)}
    >x</button>
  </div>
</div>
  
<style>
.task-item {
  background-color: #f2f2f2;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
.buttons {
  display: flex;
  gap: 10px;
}
.buttons button {
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}
.btn-update {
  background-color: orange;
}
.btn-delete {
  background-color: red;
}
.completed {
  border-left: 8px solid green;
}
.completed-btn {
  background-color: green;
  color: white;
}
</style>
