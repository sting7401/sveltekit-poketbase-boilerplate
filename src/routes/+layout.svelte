<script lang="ts">
	import '$lib/css/import.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<slot><!-- optional fallback --></slot>
