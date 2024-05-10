<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
</script>

<div class="flex flex-col justify-between bg-cover bg-center bg-fixed" style="background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .5)), url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
	<main>
		<slot />
	</main>
</div>
