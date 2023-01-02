<template>
  <div class="container full hr">
    <hr />
    <SvgDiamond />
  </div>
</template>

<style lang="scss" scoped>
  .hr {
    position: relative;
    width: 100%;
    padding: 2rem 0;
    color: black;
    background: white;

    &::before {
      content: '';
      position: absolute;
      height: 2rem;
      width: 5rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: var(--clr-light);
      z-index: 1;
    }

    hr {
      height: 2px;
      background-color: transparent;
      border-width: 2px 0px 0px;
      border-style: solid none none;
      border-color: var(--clr-primary);
      opacity: 0.5;
    }

    svg {
      position: absolute;
      width: 1.125rem;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }
</style>