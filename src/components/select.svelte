<script>
  export let options;
  export let value;
</script>

<select bind:value on:blur>
  {#each options as option}
    {#if typeof option === 'string'}
      <option key={option} value={option}>{option}</option>
    {:else}
      <option key={option.label || option.value} value={option.value}>
        {option.label || option.value}
      </option>
    {/if}
  {/each}
</select>
