<script>
  export let position;
  export let width = "50%";
</script>

<div class="float {position}" style="float: {position}; width: {width}">
  <slot />
</div>
