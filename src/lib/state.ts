import { writable } from "svelte/store";

export let emailStatus = writable('');
export let userNameStatus = writable('');

// consist of Email, Username

export let profileStatus = writable({});

// userProfile consist of all /profile Page Details 

export let tabSelected = writable('basic');