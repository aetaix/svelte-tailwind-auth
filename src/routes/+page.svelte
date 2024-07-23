<script>
	import { goto } from '$app/navigation';

	export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
		return goto('/login');
	};
</script>

<main class="h-screen w-full flex flex-col justify-center items-center">
	<img src="/svelte.svg" class="mb-4" alt="Svelte" />
	<h1 class="text-xl font-bold">Sveltekit + Tailwind CSS</h1>
	<p class="text-lg">Your best tools to build a better web</p>
	<button on:click={logout}>Logout</button>
</main>
