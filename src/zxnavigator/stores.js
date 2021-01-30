import { writable } from "svelte/store";

export const sourceFile = writable({
    name: "",
    data: ""
});