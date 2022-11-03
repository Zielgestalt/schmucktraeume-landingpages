<template>
  <NuxtLink :to="product.url" target="_blank" class="card">
    <div class="card-image has-background">
      <img :src="`/images/products/${product.sku}-1.jpg`" width="380" height="380" :alt="product.title" class="is-background" />
    </div>
    <div class="card-content text-flow">
      <h3 class="heading-4">
        {{ product.title }}
      </h3>
      <p class="card-content-price is-ff-secondary">{{ price(product.price) }}</p>
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
    overflow: hidden;
    position: relative;
    text-decoration: none;

    &-image {
      position: relative;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      background: var(--clr-grey-1);

      img {
        transform: scale(1);
        transform-origin: center center;
        transition: transform var(--transition) ease-in-out;
      }
    }

    &-content {
      padding: 1rem;

      &-price {
        color: var(--clr-grey-3);
        font-size: var(--fs-2);
      }

      @media (min-width: map-get($breakpoints, "md")) {
        padding: 1.5rem;
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