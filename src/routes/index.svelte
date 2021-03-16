<script lang="ts" context="module">
	export async function load({ page, fetch, session, context }) {
		const res = await fetch('/info')
		if (res.ok) {
			return { props: { data: await res.json() } }
		}
	}
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import type { Systeminformation } from 'systeminformation';

	export let data: Systeminformation.FsSizeData[];
	console.log(data)
</script>

<main>
	<h1>Hello world!</h1>

	<Counter />

	{#each data as fs}
		<li>{fs.fs}: {fs.available} / {fs.size} = {fs.available / fs.size * 100}%</li>
	{/each}

	<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style lang="scss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
