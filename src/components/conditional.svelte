<script>
  export let cond;
</script>

{#if !cond}
  <div style="display: none">
    <slot />
  </div>
{:else}
  <div>
    <slot />
  </div>
{/if}
