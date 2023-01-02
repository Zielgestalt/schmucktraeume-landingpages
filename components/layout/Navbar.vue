<template>
  <nav class="nav-main" data-theme="dark">
    <div class="container full">
      <a href="#top" class="logo">
        <img src="/images/logo.png" width="240" height="54" />
      </a>

      <div class="contact">
        <p><a href="tel:+4989605187"><span class="is-hidden-tablet" style="padding-right: 1rem;"><Icon name="mdi:phone" size="2rem" /></span><span class="is-hidden-mobile">+49 89 605187</span></a> <span class="is-hidden-mobile">|</span> <a href="mailto:info@schmucktraeume.com"><span class="is-hidden-tablet"><Icon name="mdi:email" size="2rem" /></span><span class="is-hidden-mobile">info@schmucktraeume.com</span></a></p>
      </div>
    </div>
    
  </nav>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
nav {
  position: fixed;
  z-index: 99;
  top: 0;
  background-color: var(--nav-background);
  width: 100%;
  box-shadow: 0 3px 1.125rem rgba(0,0,0,0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--size-5);

    @media (min-width: map-get($breakpoints, "md")) {
      padding: 0;
    }
  }

  .logo {
    max-width: 176px;
    display: block;
    padding: 1rem 0;

    @media (min-width: map-get($breakpoints, "md")) {
      max-width: 256px;
      padding: 1rem;
    }
  }
}
</style>