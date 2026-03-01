<script>
  const projects = [
    {
      title: 'Market Engagement',
      description: "These were initiatives to increase participation of the congregation inside the Hillside Christian Church. Some art direction was provided to keep within brand but a great freedom was given to experiment. Additional responsibility involved organizing and prepping slides for each campus every week with corresponding campus' slides.",
      attribution: 'All work completed for Hillside Christian Church.',
      image1x: '/img/hcc-slides1x.png',
      image2x: '/img/hcc-slides2x.png',
      colorClass: 'ruby',
    },
    {
      title: 'Integrated Functionality',
      description: "Interactive360's CRM tool needed to provide many solutions in one; part of this was website creation. These were templates created to help dealership management to update inventory & content on the website quickly and efficiently.",
      attribution: 'All work completed for Interactive360.',
      image1x: '/img/interactive-templates1x.png',
      image2x: '/img/interactive-templates2x.png',
      colorClass: 'electricBlue',
    },
  ];
</script>

<section class="portfolio">
  {#each projects as project}
    <div class="bg {project.colorClass}">
      <h5 class="title text-white">{project.title}</h5>
      <p class="text-white">{project.description}</p>
      <p class="text-small text-white"><em>{project.attribution}</em></p>
      <div class="preview">
        <img
          src={project.image1x}
          srcset="{project.image1x} 1x, {project.image2x} 2x"
          alt={project.title}
        >
      </div>
    </div>
  {/each}
</section>

<style lang="scss">
  .portfolio {
    margin: 0 0 2em;
    padding: 0;
    border-left: 0.5em solid lighten($ruby, 5%);
    border-right: 0.5em solid lighten($electric-blue, 5%);
    display: flex;
    flex: 1 1 50%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }

  .bg {
    min-height: 10vh;
    padding: 7.5vh 5vw;
    display: flex;
    flex: 1 1 50%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;

    p,
    .title {
      max-width: 755px;
      padding: 0.5em 0.75em;
      color: $deep-cove;
    }

    p {
      margin-bottom: 1em;

      &:last-of-type { margin-bottom: 2em; }
    }

    img {
      display: block;
      width: 100%;
    }

    &:last-of-type:nth-child(odd) {
      flex: 1 1 auto;

      h5, p {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }
    }

    @media screen and (max-width: $screen-sm) {
      flex: 1 1 100%;
    }
  }

  .preview {
    margin: auto auto 0;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    padding: 10px;

    &::before {
      content: '';
      position: absolute;
      background-color: rgba($deep-cove, 0.1);
      width: 100%;
      height: 100%;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: 1;
    }

    img {
      position: relative;
      z-index: 10;
    }
  }

  .ruby {
    border-left: 0.5em solid lighten($ruby, 5%);
    border-right: 0.5em solid transparent;
  }

  .electricBlue {
    border-right: 0.5em solid lighten($electric-blue, 5%);
    border-left: 0.5em solid transparent;
  }

  .text-white { color: $white; }

  .text-small {
    font-size: 12px;
    margin-bottom: 0;
    font-family: $source-code;
  }

  .title {
    background-color: rgba($deep-cove, 0.1);
    margin-bottom: 1em;
    margin-top: 0;
    font-weight: 700;
  }
</style>
