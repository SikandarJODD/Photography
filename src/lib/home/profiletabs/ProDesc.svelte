<script lang="ts">
	import { Description } from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { BadgeCheck } from 'lucide-svelte';
	import { split } from 'postcss/lib/list';

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next',
			label: 'Next.js'
		},
		{
			value: 'astro',
			label: 'Astro'
		},
		{
			value: 'nuxt',
			label: 'Nuxt.js'
		}
	];
	export let details = {
		id: 0,
		username: 'cod',
		about: '',
		skills: '',
		expertIn: ''
	};
</script>

<Card.Root class="dark:hover:bg-gray-900/30 transition-all duration-200">
	<Card.Header class="pb-3">
		<Card.Title tag="h1" class="md:text-lg">Expert In :</Card.Title>
		<Card.Description class="flex items-center text-primary font-medium">
			<BadgeCheck color="#097efb" strokeWidth={1.25} class="mr-1" />
			{details.expertIn || 'Photographer'}
		</Card.Description>
	</Card.Header>
	<Card.Header class="pb-1 pt-0">
		<Card.Title tag="h1" class="md:text-lg">About Me :</Card.Title>
	</Card.Header>
	<Card.Content class="pt-0 pb-3 text-primary/80">
		{details.about || 'No description added'}
	</Card.Content>
	<Card.Header class="pt-0 pb-1">
		<Card.Title tag="h1" class="md:text-lg">Skills :</Card.Title>
	</Card.Header>
	<Card.Content class="pt-0 pb-3 text-primary/90 flex gap-2 flex-wrap">
		{#if details.skills}
			{#each details.skills.split(',') as item}
				<Button size="sm" variant="outline">{item}</Button>
			{/each}
		{:else}
			No skills Added
		{/if}
	</Card.Content>
</Card.Root>
