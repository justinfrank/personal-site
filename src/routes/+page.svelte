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
    overflow: hidden;
  }
</style>
