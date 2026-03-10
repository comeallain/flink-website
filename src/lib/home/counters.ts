import { writable } from "svelte/store";

export const slotCount = writable(0);
export const slotRemaining = writable(500);
