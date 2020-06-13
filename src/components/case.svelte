<script>
  export let cond;
</script>

{#if cond}
  <div>
    <slot />
  </div>
{:else}
  <div style="display: none">
    <slot />
  </div>
{/if}
