<template>
  <Html lang="ja">
    <Head>
      <Title>Kazuhiro Natori ―Front-end Developer</Title>
      <Meta
        name="description"
        :content="`Kazuhiro Natori ―Front-end Developer`"
      />
    </Head>
  </Html>
  <!-- 共通のナビゲーションコンポーネント -->
  <Nav />
  <!-- 各ページのコンテンツを表示する -->
  <slot />
</template>

<script>
import Nav from "@/components/Nav.vue";
import delayedVisibilityMixin from "@/mixins/delayedVisibility";
import contactDialogToggleMixin from "@/mixins/contactDialogToggle";

export default {
  title: "Nuxt3!",
  name: "default-layout", // コンポーネントの名前を指定
  components: {
    Nav,
  },
  mixins: [delayedVisibilityMixin, contactDialogToggleMixin],
};
</script>

<style lang="scss">
@import url("@/assets/styles/acab_reset.css");
@import url("https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;600&family=Krona+One&family=Noto+Sans+JP:wght@300;400;700&display=swap");
@import url("@/assets/styles/main.scss");
</style>
