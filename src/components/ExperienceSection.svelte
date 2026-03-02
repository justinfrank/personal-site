<section class="experience">
  <div class="container">
    <h2>Experience</h2>
    <div class="employer">
      <h3>Passare &amp; Directors Investment Group</h3>
      <div class="roles">
        <div class="role">
          <div class="role-meta">
            <p>2022 – Present</p>
            <p>Design Engineer Supervisor</p>
          </div>
          <p class="role-desc">Leading the Design Engineering team to build and maintain design systems, component libraries, and tooling that empowers designers and developers across the organization.</p>
        </div>
        <div class="role">
          <div class="role-meta">
            <p>2021 – 2022</p>
            <p>Design Engineer</p>
          </div>
          <p class="role-desc">Joined and worked on the Design Engineering team to help establish design system foundations and bridge the gap between design and engineering.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .experience {
    padding: var(--section-padding);
  }

  h2 {
    font-size: $font-size-h3;
    line-height: $line-height-h3;
    font-weight: $font-weight-regular;
    margin: 0 0 2.5rem;
    color: var(--color-text);
  }

  h3 {
    font-size: $font-size-h5;
    line-height: $line-height-h5;
    font-weight: $font-weight-medium;
    margin: 0 0 1rem;
    color: var(--color-text);
  }

  .roles {
    border-top: 1px solid var(--color-divider);
  }

  .role {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 1.5rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--color-divider);

    @media screen and (max-width: $screen-sm) {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
  }

  .role-meta p {
    font-size: $font-size-body-md;
    line-height: $line-height-body-md;
    margin: 0;
    color: var(--color-text);
  }

  .role-desc {
    font-size: $font-size-body-md;
    line-height: $line-height-body-md;
    margin: 0;
    color: var(--color-text);
  }
</style>
