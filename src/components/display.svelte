<script>
  import * as Format from "d3-format";

  /* TODO: there is a lot more logic in the original that probably needs to get ported here! */
  export let format = "0.2f";
  export let value;

  let formatter = Format.format(format);

  function formatValue(v) {
    const t = typeof v;
    switch (t) {
      case "object":
        return JSON.stringify(v);
      case "boolean":
        return "" + v;
      case "number":
        return formatter(v);
      case "string":
      default:
        return v;
    }
  }
</script>

<span class={'idyll-display'}>{formatValue(value)}</span>
