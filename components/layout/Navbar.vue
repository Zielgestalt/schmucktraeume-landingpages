<template>
  <nav class="nav-main" data-theme="dark">
    <div class="container full">
      <a href="#top" class="logo">
        <img src="/images/logo.png" width="240" height="54" />
      </a>

      <div class="contact">
        <p><a href="tel:+4989605187">+49 89 605187</a> | <a href="mailto:info@schmucktraeume.com">info@schmucktraeume.com</a></p>
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
  }

  .logo {
    max-width: 256px;
    display: block;
    padding: 1rem;
  }
}
</style>