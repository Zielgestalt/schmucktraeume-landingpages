<template>
  <section>
    <div class="container text-flow is-flow-6">
      <div class="headings section-heading text-flow is-flow-6">
        <div class="heading-decoration"><SvgDiamond /></div>
        <h2 class="heading-2">Unsere Black Diamond Kollektion</h2>
      </div>
      <p style="text-align: center;">Product Gallery</p>
      
      <p style="text-align: center;"><a class="button cta has-icon is-primary" href="https://schmucktraeume.com/de/suche?controller=search&s=schwarze+Diamanten" target="_blank"><SvgDiamond />Ganze Kollektion entdecken</a></p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
section {
  background-color: #C1BDB8;

  .heading-decoration {
    position: relative;
    color: black;
    svg {
      width: 1rem;
    }

    &::before,
    &::after {
      position: absolute;
      left: 0;
      top: 50%;
      content: '';
      width: 4rem;
      height: 2px;
      background-color: var(--clr-primary);

      @media (min-width: map-get($breakpoints, "md")) {
        left: 50%;
      }
    }

    &::before {
      transform: translate(calc(2rem), -50%);

      @media (min-width: map-get($breakpoints, "md")) {
        transform: translate(calc(-50% - 4rem), -50%);
      }
    }

    &::after {
      display: none;
      
      @media (min-width: map-get($breakpoints, "md")) {
        display: block;
        transform: translate(calc(-50% + 4rem), -50%);
      }
    }
  }
}
</style>