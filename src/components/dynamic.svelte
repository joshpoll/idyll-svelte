<script>
  /* TODO!!! */
  import { onMount } from "svelte";

  import * as Drag from "d3-drag";
  import * as Format from "d3-format";
  import * as Selection from "d3-selection";

  export let value;
  export let step = 1;
  export let min = Number.NEGATIVE_INFINITY;
  export let max = Number.POSITIVE_INFINITY;
  export let display;
  export let format = ".2f";
  // TODO: what does this do??
  export let interval = 0;

  let el;
  let drag;

  let formatter = Format.format(format);

  onMount(() => {
    drag = Drag.drag().on("drag", () => {
      const dx = Selection.event.dx;
      value = Math.max(Math.min(value + (step || interval) * dx, max), min);
    });
    drag(Selection.select(el));
  });

  function transformValue() {
    if (display !== undefined) {
      if (typeof display === "string") {
        return display;
      }
      return formatter(display);
    }
    return formatter(value);
  }
</script>

<span class={'idyll-dynamic'} bind:this={el}>{transformValue()}</span>
