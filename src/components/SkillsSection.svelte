<section class="skillz">
  <div class="container">
    <div class="skills-header">
      <h2 class="secondary-text">Skills / Abilities</h2>
    </div>
    <div class="skills-grid">
      <ul class="list--default">
        <li class="title" data-title="Culturals">Cultural Traits</li>
        <li>Problem Solving / Critical thinking</li>
        <li>Clear Communication / Interpretation</li>
        <li>Organization / Order</li>
        <li>Loyalty</li>
        <li>Patience</li>
        <li>Empathy</li>
        <li>Decent Music Selection</li>
        <li>Dad Jokes or Bad Jokes (you're choice)</li>
      </ul>
      <ul class="list--default no-marg-b">
        <li class="title" data-title="Technicals">Technical Elements</li>
        <li>Front-end Dev (HTML / CSS / JS)</li>
        <li>Design (Web / Print / UI / UX / SPF-7000)</li>
        <li>Preprocessors (Sass / Less)</li>
        <li>Workflow (Gulp / Grunt)</li>
        <li>Git</li>
        <li>Email Writing</li>
        <li>Water Cooler Chatterer</li>
      </ul>
    </div>
  </div>
</section>

<style lang="scss">
  .skillz {
    padding-top: 4em;
  }

  .skills-header {
    margin-bottom: 0;
  }

  .secondary-text {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1em;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .list--default {
    flex: 1 1 300px;
    margin-bottom: 0;
    padding-left: 50px;

    .title {
      list-style-type: none;
      margin-left: -50px;
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 700;
      z-index: 10;
      color: $deep-cove;
      text-align: left;
      width: 100%;
      background-color: rgba($deep-cove, 0.1);
      padding-left: 10px;
      padding-right: 20px;
      font-family: $butler-medium-stencil;
      letter-spacing: 0.05em;
    }

    li {
      position: relative;
      list-style-type: circle;
      margin-bottom: 10px;
    }

    @media screen and (max-width: $screen-lg) {
      margin-bottom: 3em;
    }
  }

  .no-marg-b {
    margin-bottom: 0;
  }
</style>
