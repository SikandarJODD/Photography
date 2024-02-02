<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { toast } from 'svelte-sonner';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;
	let { form, errors, enhance, message } = superForm(data.form, {
		onUpdated({ form }) {
			if (form.valid) {
				toast.success('Login successful!');
				setTimeout(() => {
					goto('/photos');
				}, 600);
			}
			if (!form.valid) {
				toast.error('Invalid Email or Password');
			}
		}
	});
</script>

<div class="justify-center flex h-[90.5vh] items-center bg-slate-200 dark:bg-gray-950">
	<Card.Root class="md:w-[400px] shadow-md shadow-slate-300 dark:shadow-gray-900">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Login to Continue</Card.Title>
			<Card.Description>Enter your email and password to Visit Dashboard</Card.Description>
		</Card.Header>
		<form method="POST" use:enhance>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input
						id="email"
						bind:value={$form.email}
						type="email"
						placeholder="john@example.com"
						name="email"
					/>
					{#if $errors.email}<span class="text-sm text-red-500">{$errors.email}</span>{/if}
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input
						id="password"
						bind:value={$form.password}
						type="password"
						placeholder="Password"
						name="password"
					/>
					{#if $errors.password}<span class="text-sm text-red-500">{$errors.password}</span>{/if}
				</div>
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" type="submit">Log In</Button>
			</Card.Footer>
		</form>
		<Card.Footer>
			<div>
				Don't have an account? <a href="/signup" class="text-blue-500 underline underline-offset-1"
					>Sign Up</a
				>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
