<script>

import { Router, Route } from "svelte-routing";
import About from "./pages/About.svelte";
import Home from "./pages/Home.svelte";

export let url = ''
let name = "Tasks"

</script>

<Router url={url}>
	<h1 class="main-title"><img src="favicon.png" alt=""> {name}</h1>

	<Route path="/"><Home /></Route>
	<Route path="about"><About /></Route>
</Router>

<style>
.main-title {
	margin-bottom: 5px;
	margin-top: 25px;
	font-size: 1.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.main-title img {
  width: 50px;
}
</style>
