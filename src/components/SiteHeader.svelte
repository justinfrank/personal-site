<script>
  import { onMount } from 'svelte';
  import { Sun, Moon } from 'phosphor-svelte';
  let theme = $state('');

  onMount(() => {
    try { theme = localStorage.getItem('theme') ?? ''; } catch (e) {}
  });

  function toggleTheme() {
    const isDark =
      theme === 'dark' ||
      (theme === '' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const next = isDark ? 'light' : 'dark';
    theme = next;
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  }

  let isDark = $derived(
    theme === 'dark' ||
    (theme === '' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  let logoSrc = $derived(
    theme === 'dark' ? '/img/justin-frank-logo-bw-dark.svg' :
    theme === 'light' ? '/img/justin-frank-logo-bw-light.svg' :
    (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? '/img/justin-frank-logo-bw-dark.svg'
      : '/img/justin-frank-logo-bw-light.svg'
  );
</script>

<header>
  <div class="hero-card">
    <div class="hero-layout">
      <div class="hero-main">
        <div class="nav-row">
          <a href="/" class="logo" aria-label="Justin Frank home">
            <img src={logoSrc} alt="Justin Frank logo">
          </a>
          <nav>
            <a href="/writing">Writing</a>
            <a href="/#about">About me</a>
            <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle dark mode">
              {#if isDark}
                <Sun size={28} weight="duotone" aria-hidden="true" />
              {:else}
                <Moon size={28} weight="duotone" aria-hidden="true" />
              {/if}
            </button>
          </nav>
        </div>
        <div class="hero-content">
          <p class="eyebrow">Howdy, my name is</p>
          <h1>Justin Frank</h1>
          <p class="subtitle">Designer / Design Engineer</p>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  header {
    padding: var(--section-padding);
  }

  .hero-card {
    background: var(--color-bg-subtle);
    border-radius: 16px;
    color: var(--color-text);
    overflow: hidden;
    box-shadow: var(--shadow-elevation-low);
  }

  .hero-layout {
    display: flex;
    flex-direction: row;
    
  }

  .hero-sidebar {
    width: 200px;
    flex-shrink: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.3);

    @media screen and (max-width: $screen-sm) {
      display: none;
    }
  }

  .hero-main {
    flex: 1;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
    border-left: 1px solid var(--color-divider);
  }

  .nav-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: block;
    width: 43px;
    flex-shrink: 0;

    img { display: block; width: 100%; }

    &:hover { opacity: 0.7; }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      color: var(--color-text);
      font-weight: 400;
      font-size: 18px;
      opacity: 1;

      &:hover { opacity: 0.6; }
    }
  }

  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: var(--color-text);
    display: flex;
    align-items: center;
    appearance: none;

    &:hover { opacity: 0.7; }
  }

  .hero-content {
    margin-top: auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }

  .eyebrow {
    font-size: $font-size-body-md;
    line-height: $line-height-body-sm;
    font-weight: $font-weight-regular;
    margin: 0 0 0.5rem;
    opacity: 0.8;
  }

  h1 {
    font-size: $font-size-h1;
    font-weight: 700;
    line-height: $line-height-h1;
    margin: 0.25rem 0;

    @media screen and (max-width: $screen-sm) {
      font-size: clamp(36px, 10vw, $font-size-h1);
    }
  }

  .subtitle {
    font-size: $font-size-h5;
    font-weight: $font-weight-medium;
    line-height: $line-height-h5;
    margin: 0.5rem 0 0;

    @media screen and (max-width: $screen-sm) {
      font-size: $font-size-h5;
    }
  }
</style>
