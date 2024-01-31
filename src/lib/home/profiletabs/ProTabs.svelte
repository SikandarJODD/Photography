<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { BadgeCheck, MoveRight, RefreshCw, Sparkles, Timer, Check, X } from 'lucide-svelte';
	let featuresData = [
		{
			type: 'basic',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="mr-1 lucide lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>`,
			tab: {
				pics: 4,
				price: 3000,
				desc: '3 Photos with Pure white Background',
				delivery: 8,
				revision: 1,
				features: [
					{
						status: true,
						text: '3 photos per product'
					},
					{
						status: true,
						text: '1 Product'
					},
					{
						status: false,
						text: 'Live Model'
					},
					{
						status: false,
						text: 'Lifestyle Staging'
					},
					{
						status: true,
						text: 'Photo retouching'
					},
					{
						status: true,
						text: 'Remove photo background'
					},
					{
						status: false,
						text: 'Infographics'
					}
				]
			}
		},
		{
			type: 'standard',
			icon: BadgeCheck,
			tab: {
				pics: 6,
				price: 6000,
				desc: '6 Photos : 2 White, 2 Infographic, 2 Lifestyle ',
				delivery: 5,
				revision: 2,
				features: [
					{
						status: true,
						text: '6 photos per product'
					},
					{
						status: true,
						text: '1 Product'
					},
					{
						status: false,
						text: 'Live Model'
					},
					{
						status: true,
						text: 'Lifestyle Staging'
					},
					{
						status: true,
						text: 'Remove Photo background'
					},
					{
						status: true,
						text: 'Infographics'
					},
					{
						status: true,
						text: 'Photo Retouching'
					}
				]
			}
		},
		{
			type: 'premium',
			icon: Sparkles,
			tab: {
				pics: 9,
				price: 8000,
				desc: '9 Photos : 3 White, 3 Infographic, 3 Lifestyle with Best Qualtiy ',
				delivery: 3,
				revision: 6,
				features: [
					{
						status: true,
						text: '9 photos per product'
					},
					{
						status: true,
						text: '1 Product'
					},
					{
						status: true,
						text: 'Live Model'
					},
					{
						status: true,
						text: 'Lifestyle Staging'
					},
					{
						status: true,
						text: 'Remove Photo background'
					},
					{
						status: true,
						text: 'Infographics'
					},
					{
						status: true,
						text: 'Photo Retouching'
					}
				]
			}
		}
	];
</script>

<Tabs.Root value="basic" class="w-[400px] ">
	<Tabs.List class="grid w-full grid-cols-3 *:mx-px md:h-12">
		{#each featuresData as item}
			<Tabs.Trigger
				value={item.type}
				class="h-full capitalize {item.type === 'premium'
					? 'dark:bg-gradient-to-r from-fuchsia-600 to-blue-600 dark:text-primary'
					: ''}"
			>
				{#if item.type === 'basic'}
					{@html item.icon}
				{:else}
					<svelte:component this={item.icon} size={20} strokeWidth={1.25} class="mr-1" />
				{/if}
				{item.type}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each featuresData as item}
		<Tabs.Content value={item.type}>
			<Card.Root>
				<Card.Header class="pb-2">
					<Card.Title
						class="flex justify-between dark:border-primary/50 dark:border py-2 px-4 rounded-sm text-lg dark:bg-gray-800/30 transition-all duration-150 "
					>
						<div>{item.tab.pics} Photos</div>
						<div class="font-mono font-thin">₹{item.tab.price}</div>
					</Card.Title>
					<Card.Description>{item.tab.desc}</Card.Description>
					<Card.Description>
						<div
							class="flex justify-between my-2.5 dark:text-primary/90 *:flex *:gap-1 *:items-center *:font-medium"
						>
							<span><Timer size={20} strokeWidth={1.25} /> {item.tab.delivery} Days Delivery </span>
							<div><RefreshCw size={18} strokeWidth={1.25} /> {item.tab.revision} Revision</div>
						</div>
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<ul>
						{#each item.tab.features as feature}
							<li
								class="capitalize flex items-center gap-1.5 {!feature.status
									? 'dark:text-primary/30'
									: ''}"
							>
								{#if feature.status}
									<Check size={19} class="mt-px" strokeWidth={2} />
								{:else}
									<X size={20} strokeWidth={2.75} />
								{/if}
								<span>{feature.text}</span>
							</li>
						{/each}
					</ul>
				</Card.Content>
				<Card.Footer class="w-full">
					<Button class="w-full"
						>Continue
						<MoveRight class="ml-1.5 mt-px" size={20} strokeWidth={1.75} />
					</Button>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	{/each}
	<!-- <Tabs.Content value="standard">
		<Card.Root>
			<Card.Header>
				<Card.Title
					class="flex justify-between dark:border-primary/50 dark:border py-2 px-4 rounded-sm text-lg dark:hover:bg-gray-800/30 transition-all duration-150 "
				>
					<div>6 Photos</div>
					<div class="font-mono font-thin">₹6000</div>
				</Card.Title>
				<Card.Description>
					6 Photos (2 White,2 Infographic,2Lifestyle) (Model hands only)
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-2">Hello Bro</Card.Content>
			<Card.Footer class="w-full">
				<Button class="w-full"
					>Continue
					<MoveRight class="ml-1.5 mt-px" size={20} strokeWidth={1.75} />
				</Button>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="premium">
		<Card.Root>
			<Card.Header>
				<Card.Title
					class="flex justify-between dark:border-primary/50 dark:border py-2 px-4 rounded-sm text-lg dark:hover:bg-gray-800/30 transition-all duration-150 "
				>
					<div>9 Photos</div>
					<div class="font-mono font-thin">₹8000</div>
				</Card.Title>
				<Card.Description>
					9 Photos (3White,3Infographic,3Lifestyle-for model ask before order)
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-2">Hello Bro</Card.Content>
			<Card.Footer class="w-full">
				<Button class="w-full"
					>Continue
					<MoveRight class="ml-1.5 mt-px" size={20} strokeWidth={1.75} />
				</Button>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content> -->
</Tabs.Root>
