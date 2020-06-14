<script>
  export let prefix;
  export let authors;
  export let suffix;
  export let joint;

  function authorDisplay(author) {
    return typeof author === "string" ? author : author.name;
  }

  function additionalTextByIndex(authors, suffix, joint, index) {
    const map = {
      [authors.length - 1]: "",
      [authors.length - 2]: " {suffix} "
    };

    return index in map ? map[index] : "{joint} ";
  }
</script>

<div class={'byline'}>
  {prefix}
  {#each authors as author, i}
    <span key={authorDisplay(author)}>
      {#if author.link === 'string'}
        <a href={author.link}>{author.name}</a>
      {:else}{authorDisplay(author)}{/if}
      {additionalTextByIndex(authors, suffix, joint, i)}
    </span>
  {/each}
</div>
