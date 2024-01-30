<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	export let data: PageData;
	let { form, errors, constraints, enhance } = superForm(data.form, {
		resetForm: true,
		onUpdated({ form }) {
			if (form.valid) {
				toast.success('Sign Up successful! Check Your Email');
				setTimeout(() => {
					goto('/edit');
				}, 800);
			}
		}
	});
</script>

<div class="justify-center flex h-[90.5vh] items-center bg-slate-200">
	<Card.Root class="md:w-[400px] shadow-md shadow-slate-300">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Create an account</Card.Title>
			<Card.Description>Enter your email below to create your account</Card.Description>
		</Card.Header>
		<form method="POST" use:enhance>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="username">Username</Label>
					<Input
						id="username"
						type="text"
						bind:value={$form.username}
						{...$constraints.username}
						placeholder="Username"
						name="username"
					/>
					{#if $errors.username}
						<p>{$errors.username}</p>
					{/if}
				</div>
				<div class="grid gap-2">
					<Label for="email">Email</Label>

					<Input
						id="email"
						type="email"
						bind:value={$form.email}
						{...$constraints.email}
						placeholder="m@example.com"
						name="email"
					/>
					{#if $errors.email}
						<p class="text-xs text-red-500">{$errors.email}</p>
					{/if}
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
					{#if $errors.password}
						<p class="text-xs text-red-500">Password must contain 6 characters</p>
					{/if}
				</div>
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" type="submit">Create account</Button>
			</Card.Footer>
		</form>
		<Card.Footer>
			<div>
				Already have an account? <a href="/login" class="text-blue-500 underline underline-offset-1"
					>Log In</a
				>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
