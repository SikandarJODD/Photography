<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/home/comps/Hero.svelte';
	$: console.log($page.url);
</script>

<Hero />
