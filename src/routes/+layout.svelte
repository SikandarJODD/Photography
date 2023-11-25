<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/comps/Navbar.svelte';
	import '../app.pcss';
	$: routeID = $page.route.id?.split('/') || '/';
	export let data;
</script>

{#if routeID[1] !== '(studio)'}
	<Navbar email={data.email} />
{/if}
<slot />
