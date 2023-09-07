<template>
  <header>
    <div class="headerInner">
      <h1>Kazuhiro Natori</h1>
      <nav>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <button class="js-contactDialogOpen">contact</button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 3;
  width: 100%;
  font-family: var(--font-family-heading);
  letter-spacing: var(--letter-spacing-heading);
  border-bottom: solid 1px var(--color-white);
  backdrop-filter: blur(0.4cqw);
  background-color: rgba(22, 27, 34, 0.8);

  @media (width <= 960px) {
    inset: auto 0 0;
    border-top: solid 1px var(--color-white);
    border-bottom: none;
  }

  .headerInner {
    container-type: inline-size;
    display: grid;
    grid-template: 1fr / 1fr max-content;
    justify-content: center;
    align-items: center;
    width: var(--width-inner);
    height: var(--header-height);
    margin: auto;
    font-size: var(--font-size-M);

    @media (width <= 960px) {
      grid-template: 1fr 1fr / 1fr;
      width: 90%;
    }

    h1 {
      font-size: var(--font-size-M);

      @media (width <= 960px) {
        margin-top: 0.5em;
        font-size: var(--font-size-S);
      }
    }

    nav {
      display: grid;
      grid-template: 1fr / repeat(3, max-content);
      grid-column-gap: 1em;
      font-size: var(--font-size-M);

      > * {
        color: var(--color-white);
        text-decoration: underline;
        text-underline-offset: 0.3ex;

        @media (width <= 960px) {
          margin-bottom: 0.4em;
          font-size: 6cqw;
        }
      }
    }
  }
}
</style>