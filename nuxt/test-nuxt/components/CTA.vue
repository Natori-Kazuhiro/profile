<template>
  <section class="cta delayedItem">
    <p class="contactOffer">
      パフォーマンスの高いコーディング<br />
      モバイルフレンドリーなデザイン<br />
      スムーズなユーザーエクスペリエンス<br />
      ぜひコンタクトしてください
    </p>
    <button class="contactDialogOpen js-contactDialogOpen">contact</button>
  </section>
</template>

<style lang="scss" scoped>
.cta {
  .contactOffer {
    font-size: 5cqw;
    margin-bottom: 1em;
    font-weight: var(--font-weight-bold);

    @media (width <= 960px) {
      font-size: 5.5vw;
    }
  }
}
</style>