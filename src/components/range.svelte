<script>
  export let value;
  export let min;
  export let max;
  export let step = 1;
</script>

<input type="range" on:change bind:value min max step />
