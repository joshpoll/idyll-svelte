<script>
  import InlineSVG from "svelte-inline-svg";

  export let src;
</script>

<!-- TODO: This is based on the original implementation, which seems to assume the existence of some
other props for svg? -->
{#if !src}
  <svg />
{:else}
  <InlineSVG {src} />
{/if}
