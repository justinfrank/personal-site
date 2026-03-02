<script>
  let { data } = $props();
  const Content = $derived(data.content);
  const meta = $derived(data.meta);
</script>

<svelte:head>
  <title>{meta?.title ?? 'Writing'} — justinfrank.me</title>
</svelte:head>

<article class="writing-post">
  <div class="container">
    <header class="post-header">
      {#if meta?.title}<h1>{meta.title}</h1>{/if}
      {#if meta?.date}<time datetime={meta.date}>{meta.date}</time>{/if}
    </header>
    <div class="post-body">
      <Content />
    </div>
  </div>
</article>

<style lang="scss">
  .writing-post {
    padding: 6rem 0;
  }

  .post-header {
    margin-bottom: 3rem;

    h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      margin-bottom: 0.5rem;
    }

    time {
      font-family: $source-code;
      font-size: 14px;
      // color: rgba($deep-cove, 0.6);
      color: var(--brand);
    }
  }

  .post-body {
    max-width: 65ch;
    font-size: 18px;
    line-height: 1.7;
  }
</style>
