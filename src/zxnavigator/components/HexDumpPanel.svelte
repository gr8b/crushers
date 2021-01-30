<script>
    export let data;

    // поковырять https://hexed.it/
</script>

<div>
    {#each data as char, i}
        <span>{char.charCodeAt(0).toString(16)}</span>
    {/each}
</div>

<style>
span {
    padding-right: 5px;
    user-select: none;
}
</style>