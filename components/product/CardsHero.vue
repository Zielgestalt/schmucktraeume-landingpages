<template>
  <section class="product-cards-hero">
    <div class="container full">
      <div class="product-cards grid-cards">
        <ProductCard v-for="product in props.products" :key="product.sku" :product="product" />
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
    pointer-events: none;

    @media (min-width: map-get($breakpoints, "md")) {
      margin-top: -11rem;
    }

    .grid-cards {
      max-width: 58rem;
      margin-left: auto;
      display: grid;
      gap: var(--size-3);
      grid-template-columns: 1fr 1fr;
      pointer-events: all;

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

