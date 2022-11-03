<template>
  <section class="product-cards-hero">
    <div class="container full">
      <div class="product-cards grid-cards">
        <ProductCard v-for="(product, index) in props.products" :key="product.sku" :product="product" class="grid-cards-card is-observed onvisible-fade-up" :class="`is-staggered-${index}`" />
      </div>
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
    background: transparent;
    padding: 0 1rem 4rem;
    margin-top: -5rem;
    overflow-x: scroll;

    @media (min-width: map-get($breakpoints, "md")) {
      margin-top: -6rem;
      pointer-events: none;
      overflow-x: hidden;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      margin-top: -5rem;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      margin-top: -11rem;
    }

    .grid-cards {
      max-width: 58rem;
      margin-left: auto;
      padding-right: 1rem;
      display: grid;
      gap: var(--size-3);
      grid-template-columns: 1fr 1fr 1fr;
      min-width: 46rem;
      pointer-events: all;

      @media (min-width: map-get($breakpoints, "lg")) {
        padding-right: 0;
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 46rem;
      }

      @media (min-width: map-get($breakpoints, "xxl")) {
        max-width: 58rem;
      }
    }
  }
</style>

