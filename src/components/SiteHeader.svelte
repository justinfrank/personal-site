<script>
  import { onMount } from 'svelte';
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

  let icon = $derived(
    theme === 'dark' ? '☀' :
    theme === 'light' ? '☽' :
    (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? '☀' : '☽'
  );
</script>

<header class="plains">
  <div class="container">
    <div class="nav-row">
      <a href="/" class="logo" aria-label="Justin Frank home">
        <img src="/img/logo.svg" alt="Justin Frank logo">
      </a>
      <nav>
        <a href="/writing">Writing</a> |
        <a href="https://twitter.com/justin_frank" target="_blank" rel="noopener">Twitter</a> |
        <a href="https://dribbble.com/justin_frank" target="_blank" rel="noopener">Dribbble</a> |
        <a href="http://codepen.io/justin_frank/" target="_blank" rel="noopener">Codepen</a> |
        <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle dark mode">{icon}</button>
      </nav>
    </div>
  </div>
  <div class="header-content">
    <p class="header-text">howdy</p>
  </div>
</header>

<style lang="scss">
  header {
    padding-top: 2em;
    height: 100%;
    max-height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    border-bottom: 14px solid;
    position: relative;

    @media screen and (max-width: $screen-sm-min) {
      max-height: 375px;
    }

    &.plains {
      background-image: url('/img/plains1x.jpg');
      border-color: $ruby;

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: url('/img/plains2x.jpg');
      }
    }
  }

  .nav-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: $screen-sm) {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }

  .logo {
    width: 50px;
    display: block;
    flex-shrink: 0;

    img { display: block; width: 100%; }

    &::before,
    &::after,
    &:hover::before,
    &:hover::after 
    { display: none; }

    @media screen and (max-width: $screen-sm) {
      margin-bottom: 0;
    }
  }

  nav {
    text-align: right;
    letter-spacing: 0.1em;

    @media screen and (max-width: $screen-sm) {
      text-align: center;
      font-size: 14px;
      margin-bottom: 30px;
    }
  }

  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1em;
    padding: 0 0 0 0.5em;
    color: var(--color-text);
    line-height: 1;
    vertical-align: middle;
    appearance: none;
    &:hover { opacity: 0.7; }
  }

  .header-content {
    display: block;
    width: 90%;
    margin: auto;
    position: relative;
    height: initial;
    min-height: 320px;
    margin-top: 130px;
    z-index: 100;

    @media screen and (max-width: $screen-sm) {
      margin-top: 0;
      min-height: 200px;
    }

    @media screen and (max-width: $screen-xs) {
      margin-top: 0;
      min-height: 130px;
    }
  }

  .header-text {
    font-family: $butler-medium-stencil;
    color: $white;
    // CSS clamp() replaces jQuery FitText
    font-size: clamp(20px, 20vw, 250px);
    text-align: center;
    margin: 0;
    display: block;
    width: 100%;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
  }
</style>
