<section class="about purple-haze">
  <div class="container">
    <div class="about-grid">
      <div class="avatar-col">
        <img
          class="avatar"
          src="/img/justin-frank1x.jpg"
          srcset="/img/justin-frank1x.jpg 1x, /img/justin-frank2x.jpg 2x"
          alt="Justin Frank"
        >
      </div>
      <div class="content-col">
        <p class="text-white callout">
          Interdisciplinary designer / developer / human from the Texas Panhandle creating digital goods in the Dallas/Fort Worth area.
        </p>
        <p class="text-about">
          My name is Justin Frank. I have a unique background of experiences that has given me a stoic persistance and perspective. I work as hard as I play &amp; am available for freelance arrangment although I try to measure the two accordingly. I can be reached <a href="mailto:hello.justinfrank@gmail.com">here</a> for any inquiries.
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .purple-haze {
    position: relative;
    background-color: $deep-cove;
    z-index: 1;
    max-height: 560px;

    &::before {
      content: '';
      position: absolute;
      mix-blend-mode: overlay;
      top: 0; right: 0; bottom: 0; left: 0;
      background: linear-gradient(-45deg, darken($electric-blue, 10%) 5%, transparent 50%, $ruby 95%);
      background-size: 400% 400%;
      animation: Gradient 15s ease infinite;
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      background-color: $deep-cove;
      background-image: url('/img/topography.png');
      mix-blend-mode: color-burn;
      z-index: -2;
    }

    @media screen and (max-width: $screen-lg) {
      max-height: 850px;
    }

    @media screen and (max-width: $screen-sm) {
      max-height: none;
    }
  }

  .about-grid {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 0 2rem;
    align-items: start;

    @media screen and (max-width: $screen-sm) {
      grid-template-columns: 1fr;
    }
  }

  .avatar-col {
    position: relative;
  }

  .avatar {
    display: block;
    margin: auto auto -8em;
    width: 100%;
    position: relative;
    z-index: -1;

    @media screen and (max-width: $screen-md) {
      margin-bottom: -8em;
    }

    @media screen and (max-width: $screen-sm) {
      margin-bottom: -6em;
    }

    @media screen and (max-width: $screen-xs) {
      margin-left: auto;
      margin-bottom: -5em;
    }
  }

  .content-col {
    display: flex;
    flex-direction: column;
  }

  .callout {
    font-family: $butler-medium;
    letter-spacing: 0.05em;
    font-weight: 400;
    font-size: 24px;
    text-shadow: 0 0 3px $ruby;
    background-color: rgba($ruby, 0.9);
    padding: 2rem 1.5rem 1.5rem 2rem;
    margin-bottom: 4em;
    margin-top: 3em;
    box-shadow: 0 0 5px rgba(12, 13, 66, 0.2);

    @media screen and (max-width: $screen-sm) {
      font-size: 18px;
      font-weight: 600;
    }
  }

  .text-about {
    background-color: $alto;
    padding: 2rem 1rem 3rem 2rem;
    font-size: 18px;
    position: relative;
    left: -4em;
    box-shadow: 0 0 5px rgba(12, 13, 66, 0.2);
    font-weight: 400;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      background-color: $ruby;
      width: 100%;
      top: -8px;
      right: 8px;
      bottom: 0;
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      background-color: $electric-blue;
      width: 100%;
      top: 8px;
      right: -8px;
      bottom: 0;
      z-index: -1;
    }

    @media screen and (max-width: $screen-sm) {
      padding: 2rem;
      left: 0;
      margin-bottom: 0;
    }
  }
</style>
