<script>
import { createEventDispatcher } from 'svelte'

export let text
export let color

const dispatch = createEventDispatcher()
const handleClick = () => dispatch('handleClick')

</script>
  
<div class="button">
  <button
    on:click={handleClick}
    style="background: {color}"
  >{text}</button>
</div>
  
<style>
.button {
  text-align: center;
}
.button button {
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  color: #fff;
  cursor: pointer;
  border: none;
}
</style>
