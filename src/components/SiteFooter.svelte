<section class="footer">
  <div class="container">
    <p class="text-small text-center">
      &copy; Justin Frank | Est. 1988<br>
      All Rights Observed, Conserved &amp; Reserved
    </p>
  </div>
</section>

<style lang="scss">
  .footer {
    padding: 2em 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      height: 1px;
      width: 100%;
      max-width: 95%;
      background-color: rgba($deep-cove, 0.2);
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .text-center { text-align: center; }

  .text-small {
    font-size: 12px;
    margin-bottom: 0;
    font-family: $source-code;
  }
</style>
