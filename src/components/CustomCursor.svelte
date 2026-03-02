<script>
  import { browser } from '$app/environment';

  let x = $state(0);
  let y = $state(0);
  let hovered = $state(false);
  let visible = $state(false);

  $effect(() => {
    if (!browser) return;

    function onMove(e) {
      x = e.clientX;
      y = e.clientY;
      visible = true;
    }
    function onOver(e) {
      hovered = !!e.target.closest('a, button');
    }
    function onLeave() {
      visible = false;
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  });
</script>

<div
  class="cursor"
  class:hovered
  class:visible
  style="--x: {x}px; --y: {y}px"
  aria-hidden="true"
></div>

<style>
  .cursor {
    position: fixed;
    top: var(--y, 0px);
    left: var(--x, 0px);
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: color-mix(in srgb, var(--brand) 50%, transparent);
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition:
      width 0.2s ease,
      height 0.2s ease,
      opacity 0.3s ease;
    will-change: transform;
  }

  .cursor.visible { opacity: 1; }

  .cursor.hovered {
    width: 40px;
    height: 40px;
  }
</style>
