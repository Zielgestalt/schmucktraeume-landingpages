<template>
  <header class="hero">
    <img v-if="props.hero.image" :src="props.hero.image" class="hero-image is-background">
    <div class="hero-blur is-background is-block"></div>
    <div class="container full">
      <div class="grid-2">
        <div class="column text-flow is-flow-8">
          <div class="title text-flow is-flow-3">
            <p v-if="props.hero.overline" class="overline is-uppercase is-primary is-ff-secondary">{{ props.hero.overline }}</p>
            <h1 v-if="props.hero.headline" class="heading-1">{{ props.hero.headline }}</h1>
          </div>
          <p class="copy" v-if="props.hero.copy">{{ props.hero.copy }}</p>
          <p class=" is-observed onvisible-fade-up is-staggered-5"><a class="button cta has-icon is-dark" :href="props.hero.cta.url" target="_blank"><SvgDiamond />{{ props.hero.cta.text}}<span class="is-hidden-mobile"> entdecken</span></a></p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  const props = defineProps({
    hero: { 
      type: Object,
      default: {
        image: { type: String, default: null },
        overline: { type: String, default: null },
        headline: { type: String, default: null },
        copy: { type: String, default: null },
        cta: {
          type: Object,
          default: {
            text: null,
            url: null,
            icon: null,
          }
        }
      }
    }
    
  })
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
.hero {
  position: relative;
  overflow: hidden;
  padding: var(--size-11) var(--size-5) var(--size-11) var(--size-5);

  .grid-2 {
    max-width: 600px;

    @media (min-width: map-get($breakpoints, "lg")) {
      max-width: unset;
      grid-template-columns: 3fr 2fr;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &-image {
    opacity: 0.5;
    object-position: 66% top;

    @media (min-width: map-get($breakpoints, "lg")) {
      opacity: 1;
      object-position: 50% top;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      object-position: center center;
    }
  }

  &-blur {
    background: rgba(255, 255, 255, 0.4);

    @supports (backdrop-filter: blur(12px)) {
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(1rem);
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      display: none;
    }
  }

  @if map-get($breakpoints, "md") {
    @media (min-width: map-get($breakpoints, "md")) {
      padding: calc(var(--size-11) + 1rem) var(--size-5) var(--size-12) var(--size-5);
    }
  }

  @if map-get($breakpoints, "lg") {
    @media (min-width: map-get($breakpoints, "lg")) {
      padding: calc(var(--size-11) + 1rem) var(--size-8) var(--size-11) var(--size-8);
    }
  }

  @if map-get($breakpoints, "xl") {
    @media (min-width: map-get($breakpoints, "xl")) {
      padding: calc(var(--size-11) + 1rem) var(--size-5) var(--size-11) var(--size-5);
    }
  }

  // @if map-get($breakpoints, "xl") {
  //   @media (min-width: map-get($breakpoints, "xl")) {
  //     padding: calc(var(--size-12) + 1rem) var(--size-5) var(--size-12) var(--size-5);
  //   }
  // }

  .copy {
    font-size: var(--fs-3);
  }
}
</style>