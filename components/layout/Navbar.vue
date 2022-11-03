<template>
  <nav class="nav-main" data-theme="dark">
    <nuxt-link to="/" class="logo">
      <img src="/images/logo.png" width="240" height="54" />
    </nuxt-link>
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
  display: flex;

  .logo {
    max-width: 50%;
    display: block;
    margin: 0 auto;
    padding: 0.5rem;
  }
}
</style>