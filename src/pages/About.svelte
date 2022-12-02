<script>

import { navigate } from "svelte-routing";
import Button from '../components/Button.svelte';
const goTo = () => navigate('/')

</script>

<div class="about">
  <h1>Svelte App</h1>
</div>
<br>
<Button 
  text="Back"
  color="green"
  on:handleClick={goTo}
/>
  
<style>
.about {
  font-size: 0.8rem;
  text-align: center;
}
</style>
