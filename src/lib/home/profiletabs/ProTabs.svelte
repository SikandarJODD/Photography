<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { BadgeCheck, MoveRight, RefreshCw, Sparkles, Timer, Check, X } from 'lucide-svelte';
	export let featuresData: any = [
		{
			id: 1,
			username: 'Sikandar_Bhide',
			type: 'basic',
			pic: '3',
			price: '1500',
			delivery: '3',
			revision: '1',
			desc: '3 basic Pictures with good quality',
			features:
				'[{"text":"Remove background","status":true,"id":"b85e0a9f-e"},{"text":"High Qualtiy Images with All Formats","status":true,"id":"dde1b10c-2"},{"text":"Image Stagging Effect","status":false,"id":"7f8e4d86-1"}]'
		},
		{
			id: 2,
			username: 'Sikandar_Bhide',
			type: 'standard',
			pic: '6',
			price: '8000',
			delivery: '3',
			revision: '3',
			desc: '6 Photos : 2 White, 2 Infographic, 2 Lifestyle',
			features:
				'[{"text":"6 Photos Per Product","status":true,"id":"fd2ef818-0"},{"text":"Lifestyle Staging","status":true,"id":"a82f40c7-9"},{"text":"Remove Photo Background","status":true,"id":"5fc3ec48-6"},{"text":"Infographics","status":true,"id":"4102757e-5"},{"text":"Live Model","status":false,"id":"d27f223a-f"}]'
		},
		{
			id: 3,
			username: 'Sikandar_Bhide',
			type: 'premium',
			pic: '9',
			price: '1200',
			delivery: '5',
			revision: '3',
			desc: '9 Photos : 3 White, 3 Infographic, 3 Lifestyle with Best Qualtiy',
			features:
				'[{"text":"9 Photos Per Product","status":true,"id":"3cf0660f-c"},{"text":"1 Product","status":true,"id":"3ba241a5-1"},{"text":"Live Model","status":true,"id":"d333d10c-5"},{"text":"Lifestyle Staging","status":true,"id":"f6c089dc-6"}]'
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-bolt"
						><path
							d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
						/><circle cx="12" cy="12" r="4" /></svg
					>
				{:else if item.type === 'standard'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-badge-check"
						><path
							d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
						/><path d="m9 12 2 2 4-4" /></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-sparkles"
						><path
							d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
						/><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg
					>
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
						<div>{item.pic} Photos</div>
						<div class="font-mono font-thin">₹{item.price}</div>
					</Card.Title>
					<Card.Description>{item.desc}</Card.Description>
					<Card.Description>
						<div
							class="flex justify-between my-2.5 dark:text-primary/90 *:flex *:gap-1 *:items-center *:font-medium"
						>
							<span><Timer size={20} strokeWidth={1.25} /> {item.delivery} Days Delivery </span>
							<div><RefreshCw size={18} strokeWidth={1.25} /> {item.revision} Revision</div>
						</div>
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<ul>
						{#each JSON.parse(item.features) as feature}
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
	{:else}
		<div>
			<p>Information Not filled</p>
			<span>
				Go to <a href="/edit">Edit</a> to fill the information
			</span>
		</div>
	{/each}
</Tabs.Root>
