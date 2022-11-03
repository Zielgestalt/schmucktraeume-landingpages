<template>
  <NuxtLink :to="product.url" target="_blank" class="card">
    <div class="card-image has-background">
      <img :src="`/images/products/${product.sku}-featured.jpg`" width="710" height="620" :alt="product.title" class="is-background" />
    </div>
    <div class="card-content text-flow is-flow-6">
      <div class="card-content-heading text-flow">
        <h3 class="heading-3">
          {{ product.title }}
        </h3>
        <p class="card-content-price is-ff-secondary">{{ price(product.price) }}</p>
      </div>
      <p>{{ product.description }}</p>
      <p class="is-primary is-underlined">Mehr erfahren</p>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    product: { 
      type: Object,
      default: {}
    }
    
  })

  function price (price) {
    if (price) {
      return price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    } else {
      return ''
    }
  }
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
  .card {
    background: var(--clr-light);
    box-shadow: 0 3px 1.125rem rgba(0,0,0,0.1);
    border-radius: 1.125rem;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;

    @media (min-width: map-get($breakpoints, "md")) {
      display: grid;
      gap: var(--size-4);
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      gap: var(--size-9);
    }

    &-image {
      min-height: 75vw;
      border-radius: 1.125rem 1.125rem 0 0;
      position: relative;
      overflow: hidden;
      background: var(--clr-grey-1);

      img {
        transform: scale(1);
        transform-origin: center center;
        transition: transform var(--transition) ease-in-out;
      }

      @media (min-width: map-get($breakpoints, "md")) {
        min-height: unset;
        border-radius: 1.125rem 0 0 1.125rem;
      }
    }

    &-content {
      padding: 1.5rem;

      @media (min-width: map-get($breakpoints, "md")) {
        padding: var(--size-9);
      }

      &-price {
        color: var(--clr-grey-3);
        font-size: var(--fs-2);
      }
    }

    &:hover {
      .card-image {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
</style>