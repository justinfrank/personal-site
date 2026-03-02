<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Writing — justinfrank.me</title>
</svelte:head>

<div class="writing-index">
  <div class="container">
    <h1>Writing</h1>
    <ul class="post-list">
      {#each data.posts as post}
        <li>
          <a href="/writing/{post.slug}">
            <span class="post-title">{post.meta?.title ?? post.slug}</span>
            {#if post.meta?.date}
              <time datetime={post.meta.date}>{post.meta.date}</time>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  .writing-index {
    padding: 6rem 0;
  }

  h1 {
    margin-bottom: 3rem;
  }

  .post-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li a {
      display: flex;
      align-items: baseline;
      gap: 1rem;
      text-decoration: none;
      flex-direction: column;

      &::before,
      &::after { display: none; }

      &:hover .post-title {
        text-decoration: underline;
      }
    }

    .post-title {
      font-size: 1.2rem;
    }

    time {
      font-family: $source-code;
      font-size: 13px;
      opacity: 0.6;
      white-space: nowrap;
      color: var(--brand);
    }
  }
</style>
