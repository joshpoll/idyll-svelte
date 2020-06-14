<script>
  export let layout;
  export let theme;
</script>

<svelte:head>
  {#if layout === undefined}
    <link rel="stylesheet" href="layouts/none.css" />
  {:else if layout === 'blog'}
    <link rel="stylesheet" href="layouts/blog.css" />
  {:else if layout === 'centered'}
    <link rel="stylesheet" href="layouts/centered.css" />
  {:else}
    <link rel="stylesheet" href="layouts/none.css" />
  {/if}

  {#if theme === undefined}
    <link rel="stylesheet" href="themes/none.css" />
  {:else if theme === 'github'}
    <link rel="stylesheet" href="themes/github.css" />
  {:else if theme === 'idyll'}
    <link rel="stylesheet" href="themes/idyll.css" />
  {:else if theme === 'tufte'}
    <link rel="stylesheet" href="themes/tufte.css" />
  {:else}
    <link rel="stylesheet" href="layouts/default.css" />
  {/if}
</svelte:head>
<slot />
