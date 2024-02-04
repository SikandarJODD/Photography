<script>
	import StudioLayout from '$lib/home/studio/StudioLayout.svelte';
	export let data;
</script>

<StudioLayout email={data.email}>
	<slot />
</StudioLayout>
