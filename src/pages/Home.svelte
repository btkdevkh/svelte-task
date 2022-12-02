<script>

import { navigate } from "svelte-routing";
import Button from "../components/Button.svelte";
import TaskList from "../components/TaskList.svelte";

let isAddTask = false

const handleClick = () => isAddTask = !isAddTask
const goTo = () => {
	navigate('/about')
}

</script>

<main>
  <div class="container">
    <hr>
		<br>

		<div class="task-list-btns">
			{#if !isAddTask}
				<Button 
					text={'Add'}
					color={'green'}
					on:handleClick={handleClick}
				/>
			{/if}
			{#if isAddTask}
				<Button 
					text={'Close'}
					color={'red'}
					on:handleClick={handleClick}
				/>
			{/if}
			<Button 
				text={'About'}
				color={'gray'}
				on:handleClick={goTo}
			/>
		</div>

		<TaskList {isAddTask} {handleClick} />
  </div>
</main>

<style>
hr {
  border: none;
  height: 1px;
  background-color: #ddd;
}
.task-list-btns {
  display: flex;
  justify-content: space-between;
}
</style>
