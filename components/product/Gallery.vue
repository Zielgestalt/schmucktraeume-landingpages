<template>
  <section class=" text-flow is-flow-9">
    <div class="container text-flow is-flow-6">
      <div class="headings section-heading text-flow is-flow-6">
        <div class="heading-decoration"><SvgDiamond /></div>
        <h2 class="heading-2">Unsere Black Diamond Kollektion</h2>
      </div>
    </div>

    <div class="container is-visible text-flow is-flow-6">

      <ProductCardsGallery :products="props.products" />
      
      <p style="text-align: center;"><a class="button cta has-icon is-primary" href="https://schmucktraeume.com/de/schwarze-diamanten" target="_blank"><SvgDiamond /><span class="is-hidden-mobile">Ganze </span>Kollektion entdecken</a></p>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    products: { 
      type: Object,
      default: {}
    }
    
  })
</script>

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