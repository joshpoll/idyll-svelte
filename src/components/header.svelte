<script>
  import ByLineMultipleAuthors from "./byLineMultipleAuthors.svelte";

  export let title;
  export let subtitle;
  export let author;
  export let authorLink;
  export let authors;
  export let date;
  export let background = "#222";
  /* TODO: is there a way to specify the fields of this object? */
  export let byLineTemplate;
  export let color = "#fff";

  const byLineDefault = { prefix: "By:", joint: ",", suffix: "and" };

  $: byLineTemplateFull = { ...byLineDefault, ...byLineTemplate };
  $: prefix = byLineTemplateFull.prefix.trim();
  $: joint = byLineTemplateFull.joint.trim();
  $: suffix = byLineTemplateFull.suffix.trim();
</script>

<div class={'article-header'} style="background: {background}; color: {color}">
  <h1 class={'hed'}>{title}</h1>
  {#if subtitle}
    <h2 class={'dek'}>{subtitle}</h2>
  {/if}
  {#if author}
    <div className={'byline'}>
      {prefix}
      <a href={authorLink}>{author}</a>
    </div>
  {/if}
  {#if !!authors}
    <ByLineMultipleAuthors
      authors={this.props.authors}
      {prefix}
      {joint}
      {suffix} />
  {/if}
  {#if date}
    <div class={'idyll-pub-date'}>{date}</div>
  {/if}
</div>
