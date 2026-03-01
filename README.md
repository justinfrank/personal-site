# justinfrank.me

Personal portfolio site for Justin Frank — designer/developer from the Texas Panhandle, based in the Dallas/Fort Worth area.

Built with **SvelteKit 2 + Svelte 5**, fully static output via `@sveltejs/adapter-static`. Styled with plain SCSS (no frameworks). Writing/case studies authored in Markdown via mdsvex.

---

## Stack

| Layer | Tool |
|---|---|
| Framework | SvelteKit 2 / Svelte 5 |
| Build | Vite 6 |
| Styling | Dart Sass (`sass`) via `vitePreprocess` |
| Content | mdsvex (`.md` files → Svelte routes) |
| Output | Fully static (`build/`) |
| Fonts | Butler (self-hosted woff/woff2) + Google Fonts |

Replaces: Gulp 3, Bootstrap 3, jQuery 1.x, FitText plugin, Universal Analytics.

---

## Commands

```bash
npm run dev      # Start dev server at localhost:5173
npm run build    # Build static site to build/
npm run preview  # Preview the production build locally
```

---

## File Structure

```
personal-site/
├── src/
│   ├── app.html                          # HTML shell — favicons, Google Fonts, %sveltekit.head/body%
│   ├── app.scss                          # Global styles: @font-face, @keyframes, body, a, .container
│   ├── lib/
│   │   └── styles/
│   │       ├── _variables.scss           # Colors, fonts, breakpoints ($screen-* aliases included)
│   │       └── _mixins.scss              # Shared mixins (extend as needed)
│   ├── components/
│   │   ├── SiteHeader.svelte             # Header, nav, "howdy" headline
│   │   ├── AboutSection.svelte           # Animated gradient section, avatar, callout, bio
│   │   ├── SkillsSection.svelte          # Cultural + technical skills lists
│   │   ├── PortfolioSection.svelte       # Data-driven project cards
│   │   └── SiteFooter.svelte             # Footer with border-top
│   ├── routes/
│   │   ├── +layout.js                    # export const prerender = true
│   │   ├── +layout.svelte                # Imports app.scss, GA4 placeholder
│   │   ├── +page.svelte                  # Composes all section components
│   │   └── writing/
│   │       └── [slug]/
│   │           ├── +page.js              # Auto-discovers .md files via import.meta.glob
│   │           └── +page.svelte          # Renders mdsvex content
│   └── writing/                          # Drop .md posts here — auto-prerendered
├── static/
│   ├── img/                              # Site images (plains, avatar, portfolio shots)
│   ├── fonts/
│   │   ├── butler/                       # Butler woff/woff2 files
│   │   └── butler-stencil/               # Butler Stencil woff/woff2 files
│   ├── favicon*.png, apple-touch-icon.png, safari-pinned-tab.svg
│   └── site.webmanifest
├── svelte.config.js
├── vite.config.js
└── package.json
```

---

## Components

### `SiteHeader.svelte`
Header with background image, logo, nav links, and the "howdy" headline. The headline uses `font-size: clamp(20px, 20vw, 250px)` — replaces the old jQuery FitText plugin with zero JavaScript.

### `AboutSection.svelte`
The animated gradient (`purple-haze`) section. CSS Grid replaces Bootstrap's offset column layout. The gradient animation is driven by a `@keyframes Gradient` defined globally in `app.scss` — keyframe names are always global in CSS, so the scoped `animation:` reference in the component works correctly.

### `SkillsSection.svelte`
Cultural and technical skills rendered as two flex-wrapped `ul` lists.

### `PortfolioSection.svelte`
Data-driven — projects are defined as a plain JS array at the top of the `<script>` block. Adding a project means appending one object to the array:

```js
const projects = [
  {
    title: 'Project Title',
    description: 'What you did.',
    attribution: 'All work completed for Client Name.',
    image1x: '/img/project1x.png',
    image2x: '/img/project2x.png',
    colorClass: 'ruby',  // or 'electricBlue'
  },
];
```

### `SiteFooter.svelte`
Minimal footer with a `::before` border-top rule and copyright text.

---

## SCSS Architecture

Variables and mixins are injected globally into every `<style lang="scss">` block via Vite's `additionalData`. This means you never need to `@import` or `@use` them manually in a component.

```scss
/* Available everywhere — no import needed */
$ruby, $electric-blue, $deep-cove, $white, $alto
$open-sans, $source-code, $butler-medium-stencil, $butler-medium
$mobile, $tablet, $large
$screen-xs, $screen-sm, $screen-sm-min, $screen-md, $screen-lg
```

**Rule:** `_variables.scss` and `_mixins.scss` must never contain output-generating CSS (no selectors, no `@font-face`, no `@keyframes`). Only variables, functions, and mixins. Global output-generating rules live in `app.scss`.

---

## Adding a Writing Post

1. Create a Markdown file in `src/writing/`:

```markdown
---
title: "Case Study: Project Name"
date: "2026-03-01"
---

# Heading

Write in plain Markdown. You can also embed Svelte components.
```

2. That's it. The `import.meta.glob` in `+page.js` auto-discovers all `.md` files and `entries()` derives the slugs — no config needed. The post prerendered at `/writing/case-study-project-name` on the next build.

---

## Google Analytics 4

The GA4 snippet is in `src/routes/+layout.svelte`, commented out. Replace `G-XXXXXXXXXX` with your measurement ID and uncomment:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Svelte 5 Patterns Used

This project uses Svelte 5 syntax throughout.

**Props** — use `$props()` instead of `export let`:
```svelte
<script>
  let { data } = $props();
</script>
```

**Derived state** — use `$derived()` for values computed from props:
```svelte
<script>
  let { data } = $props();
  const title = $derived(data.meta.title);
</script>
```

**Rendering children** — layouts use `{@render children()}` instead of `<slot>`:
```svelte
<script>
  let { children } = $props();
</script>

{@render children()}
```

**Reactive state** — use `$state()` for mutable local state (not needed in this project's static components, but the pattern for future use):
```svelte
<script>
  let count = $state(0);
</script>
```

---

## Deployment

The `build/` directory is a fully static site. Point any static host at it:

- **Netlify**: build command `npm run build`, publish directory `build`
- **Vercel**: framework preset `SvelteKit`, or build command `npm run build`, output `build`
- **GitHub Pages**: build and commit `build/` or use a CI action

No server-side runtime required.
