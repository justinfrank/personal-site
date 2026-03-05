<script>
  import { browser } from '$app/environment';
  import { Sun, Moon } from 'phosphor-svelte';

  let theme = $state(
    browser ? (document.documentElement.getAttribute('data-theme') ?? '') : ''
  );

  function toggleTheme() {
    const isDark =
      theme === 'dark' ||
      (theme === '' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const next = isDark ? 'light' : 'dark';
    theme = next;
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
      document.cookie = 'theme=' + next + '; path=/; max-age=31536000; SameSite=Lax';
    } catch (e) {}
  }

  let isDark = $derived(
    theme === 'dark' ||
    (theme === '' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  let logoSrc = $derived(
    isDark ? '/img/justin-frank-logo-bw-dark.svg' : '/img/justin-frank-logo-bw-light.svg'
  );

  $effect(() => {
    const link = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
    if (link) link.setAttribute('href', isDark ? '/img/justin-frank-logo-bw-dark.svg' : '/img/justin-frank-logo-bw-light.svg');
  });
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
                <Sun size={28} weight="duotone" color="#fff" secondary="#FF5A4B" aria-hidden="true" />
              {:else}
                <Moon size={28} weight="duotone" aria-hidden="true" />
              {/if}
            </button>
          </nav>
        </div>
        <div class="hero-content">
          <p class="eyebrow">
            <span class="word">Howdy,</span>
            <span class="word">my</span>
            <span class="word">name</span>
            <span class="word">is</span>
          </p>
          <h1>
            <span class="word">Justin Frank</span>
          </h1>
          <p class="subtitle">
            <span class="word">Designer</span>
            <span class="brand">/</span>
            <span class="word">Design</span>
            <span class="word">Engineer</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  header {
    padding: var(--section-padding);
  }

  .brand {
    color: var(--brand);
  }

  .word {
    display: inline-block;
    border-radius: 3px;
    padding: 0 2px;
    cursor: default;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: rgba(255, 90, 75, 0.5);
      color: var(--color-text);
    }
  }

  .hero-card {
    background: var(--color-bg-subtle);
    border-radius: 12px;
    color: var(--color-text);
    overflow: hidden;
    box-shadow: var(--shadow-elevation-low);
    position: relative;

    // &:after {
    //   content: "";
    //   position: absolute;
    //   background-image: url('/img/textures/paper-creased.jpeg');
    //   height: 100%;
    //   width: 100%;
    //   z-index: 0;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   mix-blend-mode: lighten;
    //   opacity: .3;
    // }
  }

  .hero-layout {
    display: flex;
    flex-direction: row;
    z-index: 1;
    position: relative;
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
    border-left: var(--color-divider);
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
      color: var(--color-link);
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
    font-size: var(--font-size-body-md);
    line-height: var(--line-height-body-sm);
    font-weight: var(--font-weight-regular);
    margin: 0 0 0.5rem;
    opacity: 0.8;
  }

  h1 {
    font-size: var(--font-size-h1);
    font-weight: 700;
    line-height: var(--line-height-h1);
    margin: 0.25rem 0;

    @media screen and (max-width: $screen-sm) {
      font-size: clamp(36px, 10vw, var(--font-size-h1));
    }
  }

  .subtitle {
    font-size: var(--font-size-h5);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-h5);
    margin: 0.5rem 0 0;

    @media screen and (max-width: $screen-sm) {
      font-size: var(--font-size-h5);
    }
  }
</style>
