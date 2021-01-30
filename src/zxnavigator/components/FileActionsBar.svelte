<script>
    import { createEventDispatcher } from "svelte";
    export let navigatorFile;

    let files;

	$: if (files) {
        load(files.item(0));
	}

    function save() {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(navigatorFile.data));
        element.setAttribute('download', navigatorFile.name);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();

        document.body.removeChild(element);
    }

    async function load(file) {
        let data = await file.text();

        navigatorFile.load(file.name, data);
    }
</script>

<button on:click={save}>Save</button>
<label for="load-file-container" class="button">Load</label>
<input id="load-file-container" type="file" bind:files />

<style>
    #load-file-container { display: none; }

    label {
        display: inline-block;
    }
</style>