<template>
  <section id="fv">
    <h1>
      <span class="delayedItem" data-delay="500">Kazuhiro Natori</span><br />
      <span class="delayedItem" data-delay="1000">―Front-end Developer</span>
    </h1>
    <button class="contactDialogOpen js-contactDialogOpen">contact</button>
  </section>
</template>

<style lang="scss" scoped>
#fv {
  margin-top: 10cqw;

  @media (width <=960px) {
    margin-top: 20cqw;
  }

  h1 {
    margin-bottom: 2em;
    /* 2行にギリギリ収まるサイズにする */
    font-size: 68px;
    font-family: var(--font-family-heading);
    letter-spacing: var(--letter-spacing-heading);
    line-height: 1.8;

    @media (width <=960px) {
      font-size: 12vw;
      margin-bottom: 1em;
      line-height: 1.3;
    }

    span:nth-child(1) {
      margin-bottom: 1em;
    }
  }
}
</style>