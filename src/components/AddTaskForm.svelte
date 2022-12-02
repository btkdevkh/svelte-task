<script>

import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher()

let name = ''
let date = ''
let completed = false

const onEmitAddTask = () => {
  if(!name) return

  const task = {
    id: Date.now(),
    name, 
    date,
    completed
  }
  
  dispatch('onEmitAddTask', task)

  name = ''
  date = ''
  completed = false
}
  
</script>
  
<form class="add-task-form" on:submit|preventDefault={onEmitAddTask}>
  <input type="text" placeholder="Name" bind:value={name}>
  <input type="date" placeholder="Date" bind:value={date}>

  <label for="completed">Completed</label>
  <input type="checkbox" id="completed" bind:checked={completed}>
  
  <input type="submit" value="Submit">
</form>
  
<style>
.add-task-form {
  text-align: left;
  margin-bottom: 15px;
}
.add-task-form input {
  display: block;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.add-task-form label {
  background-color: gray;
  color: white;
  padding: 3px 8px;
  border-radius: 5px;
  font-size: .9rem;
}
.add-task-form input[type="checkbox"] {
  width: 30px;
  display: inline-block;
}
.add-task-form input[type="submit"] {
  background-color: #4f4fff;
  border: none;
  margin-top: 5px;
  color: white;
  cursor: pointer;
  padding: 7px;
}
</style>
