<template>
  <div class="cards-slider-container">
    <div class="card-slider-wrapper">
      <div
        ref="slider"
        class="product-cards grid-cards-slider"
        :style="`transform: translateX(${translatePosition}); width: ${sliderWidth};`"
      >
        <ProductCard v-for="(product, index) in props.products" :key="product.sku" :product="product" class="grid-cards-card" />
      </div>

      <div class="card-slider-control">
        <span @click="slidePrev" class="is-pointer is-block">
          &larr;
          <!-- <SvgIconArrowCircle direction="left" /> -->
        </span>
        <span @click="slideNext" class="is-pointer is-block">
          <!-- <SvgIconArrowCircle /> -->
          &rarr;
        </span>
      </div>
    </div>

    
  </div>
</template>

<script setup>
  const props = defineProps({
    products: { 
      type: Object,
      default: {}
    }
    
  })

  const sliderIndex = ref(0);

  const translatePosition = computed(() => {
    const position = sliderIndex.value * 300 * -1
    return position + 'px'
  })

  const sliderWidth = computed(() => {
    const width = props.products.length * 300
    return width + 'px'
  })

  function slideNext() {
    if (sliderIndex.value < (props.products.length - 1)) {
      sliderIndex.value = sliderIndex.value + 1
      // this.$refs.slider.style.transform = `translateX(${this.translatePosition})`
    } else {
      sliderIndex.value = 0
      // this.$refs.slider.style.transform = `translateX(0)`
    }
  }

  function slidePrev() {
    if (sliderIndex.value > 0) {
      sliderIndex.value = sliderIndex.value - 1
      // this.$refs.slider.style.transform = `translateX(${this.translatePosition})`
    } else {
      sliderIndex.value = props.products.length - 1
      // this.$refs.slider.style.transform = `translateX(0)`
    }
  }
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";

.cards-slider-container {
  overflow-x: scroll;
  margin-inline: -1.5rem;
  padding-inline: 1.5rem;

  @media (min-width: map-get($breakpoints, "lg")) {
    overflow: visible;
  }
}
.grid-cards-slider {
  display: flex;
  gap: 1rem;
  transform: translateX(0);
  transition: transform 0.4s ease-in-out;

  .grid-cards-card {
    width: 300px;
  }
}

.card-slider-wrapper {
  // overflow: hidden;
  position: relative;
  padding-bottom: 2rem;

  @media (min-width: map-get($breakpoints, "lg")) {
    padding-bottom: 5rem;
  }
}


.card-slider-control {
  display: none;

  @media (min-width: map-get($breakpoints, "lg")) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 18.75rem;
    font-size: 2rem;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      padding: 0.5rem;
      line-height: 1.75rem;
      cursor: pointer;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--clr-primary);
      }
    }
  }
}
</style>

