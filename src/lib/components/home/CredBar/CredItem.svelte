<script lang="ts">
	export let className = "";
</script>

<div class={`cred-item flex items-center gap-2 ${className}`}>
	<div class="dot h-1 w-1 rounded-full bg-orange-400"></div>
	<slot />
</div>
