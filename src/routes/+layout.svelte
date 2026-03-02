<script>
  import '../app.scss';
  import CustomCursor from '$components/CustomCursor.svelte';

  let { children } = $props();
</script>

<!-- Google Analytics 4 — replace G-XXXXXXXXXX with your measurement ID -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script> -->

<CustomCursor />
{@render children()}
