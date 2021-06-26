<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script>
    import Home from '../components/Home.svelte';
    import Intro from '../components/Intro.svelte';

	const options = [
		{ page: 'home',   component: Home },
		{ page: 'Intro', component: Intro },
	];

    let i = 0;
    const updateIndex = (newIndex) => {
        console.log(newIndex)
        i = newIndex
    }
	$: selected = options[i];
    console.log(i)
</script>

<div class="min-h-screen w-full bg-rose flex flex-col">
    <div class="h-32 flex flex-row" id="header">
        {#if i === 0}
            <div class="h-32" id="header">
                <p class="font-monserrat p-5 text-customBlack text-lg">[Pablo Voorvaart]</p>
            </div>
        {:else}
            <p on:click={() => i--}
                class="mr-auto font-monserrat p-5 text-customBlack text-lg">[&#60--]</p>
            <p class="mx-auto font-monserrat p-5 text-customBlack text-lg">[{selected.page}]</p>
            <p on:click={() => i++}
                class="ml-auto font-monserrat p-5 text-customBlack text-lg">[--&gt;]</p>
        {/if}
    </div>
    {#if i === 0}
        <Home updateIndex={updateIndex}/>
    {:else}
        <svelte:component this={selected.component}/>
    {/if}
    <div class="h-32 flex flex-row items-center" id="header">
        <p class="font-monserrat p-5 text-customBlack text-xl underline">MAIL</p>
        <div class="ml-auto p-5 flex flex-col">
            <p class="font-monserrat text-customBlack text-md underline">GitHub</p>
            <p class="font-monserrat text-customBlack text-md underline">Twitter</p>
        </div>
    </div>
</div>