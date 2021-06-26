
<script>
    export let updateIndex;
</script>

<div class="w-full flex flex-grow flex-col items-center justify-end" style="margin-bottom: 20%;">
    <p on:click={() => updateIndex(1)} class="font-monserrat py-3 text-customBlack text-4xl font-bold underline">Intro/(01)</p>
    <p on:click={() => updateIndex(2)} class="font-monserrat py-3 text-customBlack text-4xl font-bold underline">Resume/(02)</p>
    <p on:click={() => updateIndex(3)} class="font-monserrat py-3 text-customBlack text-4xl font-bold underline">Body/(03)</p>
    <p on:click={() => updateIndex(4)} class="font-monserrat py-3 text-customBlack text-4xl font-bold underline">Soul/(04)</p>
</div>


