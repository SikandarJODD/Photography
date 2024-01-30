<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { BadgeCheck, MoveRight, RefreshCw, Sparkles, Timer, Check, X } from 'lucide-svelte';
</script>

<Tabs.Root value="basic" class="w-[400px] ">
	<Tabs.List class="grid w-full grid-cols-3 *:mx-px ">
		<Tabs.Trigger value="basic">Basic</Tabs.Trigger>
		<Tabs.Trigger value="standard">
			<BadgeCheck size={20} strokeWidth={1.25} class="mr-1" />
			Standard</Tabs.Trigger
		>
		<Tabs.Trigger
			value="premium"
			class="dark:text-white dark:bg-gradient-to-r from-fuchsia-800 to-blue-700"
		>
			<Sparkles size={20} strokeWidth={1.25} class="mr-1" />
			Premium</Tabs.Trigger
		>
	</Tabs.List>
	<Tabs.Content value="basic">
		<Card.Root>
			<Card.Header class="pb-2">
				<Card.Title
					class="flex justify-between dark:border-primary/50 dark:border py-2 px-4 rounded-sm text-lg dark:bg-gray-800/30 transition-all duration-150 "
				>
					<div>3 Photos</div>
					<div class="font-mono font-thin">₹3000</div>
				</Card.Title>
				<Card.Description>3 Photos with Pure white Background</Card.Description>
				<Card.Description>
					<div
						class="flex justify-between my-2.5 dark:text-primary/90 *:flex *:gap-1 *:items-center *:font-medium"
					>
						<span><Timer size={20} strokeWidth={1.25} /> 14 Days Delivery</span>
						<div><RefreshCw size={18} strokeWidth={1.25} /> 3 Revsion</div>
					</div>
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<ul>
					<li class="capitalize flex items-center gap-1.5">
						<Check size={19} class="mt-px" strokeWidth={2} /><span>3 photos per product</span>
					</li>
					<li class="capitalize flex items-center gap-1.5">
						<Check size={19} class="mt-px" strokeWidth={2} /><span>Photo Retouching</span>
					</li>
					<li class="capitalize flex items-center gap-1.5 dark:text-primary/40">
						<X size={20} strokeWidth={2.75} /><span>Lifestyle staging</span>
					</li>
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
	<Tabs.Content value="standard">
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
	</Tabs.Content>
</Tabs.Root>
