<script>
    import Trd from "./trd";
    import FileActionsBar from "./components/FileActionsBar.svelte";
    import HexDumpPanel from "./components/HexDumpPanel.svelte";

    export let navigatorFile = new Trd;

    let data = "demo string test";

</script>

<div class="zxnaviator">
    <input type="text" bind:value={data} />
    <FileActionsBar navigatorFile={navigatorFile}/>
    <HexDumpPanel data={data}/>
</div>