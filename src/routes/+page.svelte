<script>
  import SiteHeader from '$components/SiteHeader.svelte';
  import AboutSection from '$components/AboutSection.svelte';
  import ExperienceSection from '$components/ExperienceSection.svelte';
  import SiteFooter from '$components/SiteFooter.svelte';
  // Kept but hidden:
  // import SkillsSection from '$components/SkillsSection.svelte';
  // import PortfolioSection from '$components/PortfolioSection.svelte';
</script>

<SiteHeader />
<div class="page-body">
  <AboutSection />
  <ExperienceSection />
  <SiteFooter />
</div>

<style>
  .page-body {
    margin: 0 1.5rem;
    border-left: 1px solid var(--color-divider);
    border-right: 1px solid var(--color-divider);
    border-bottom: 1px solid var(--color-divider);
    border-radius: 0 0 16px 16px;
    overflow: hidden;
  }
</style>
