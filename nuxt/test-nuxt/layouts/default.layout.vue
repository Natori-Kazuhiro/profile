<template>
    <!-- 共通のナビゲーションコンポーネント -->
    <Nav />
    <main>
        <!-- 各ページのコンテンツを表示する -->
        <slot /> 
    </main>
</template>

<script>
    import Nav from '@/components/Nav.vue';

    export default {
        name: 'default-layout', // コンポーネントの名前を指定
        components: {
        Nav // コンポーネントを登録
        }
    };
</script>

<style>
/* アプリケーション全体のスタイリング */
    /* general */
    :root {
        --color-darkNavy: rgba(22, 27, 34, 1);
        --color-white: #f3f3f3;
        --color-teal: #6baf8d;
        --color-darkGray: #232e33;
        --font-size-S: 2cqw;
        --font-size-M: 3cqw;
        --font-size-L: 5cqw;
        --font-weight-thin: 100;
        --font-weight-medium: 300;
        --font-weight-bold: 600;
        --font-family-heading: 'Krona One', 'Noto Sans JP', cursive;
        /* cursiveにfont-feature-settingsが効かないので調整 */
        --letter-spacing-heading: -0.04em;
        --width-inner: min(100%, 960px);
        --header-height: 100px;
        --scrollbar-size: 10px;
        scroll-behavior: smooth;
        /* ページ内スクロール時の高さ調整 */
        scroll-padding-top: var(--header-height);
    }

    body {
        margin: 0 auto;
        font-family: YakuHanJP, 'IBM Plex Sans' ,'Noto Sans JP' , sans-serif;
        font-feature-settings: "palt";
        color: var(--color-white);
        background-color: var(--color-darkNavy);
        scrollbar-color: var(--color-teal) var(--color-darkGray);
    }
    /* 効いてないかも */
    dialog{
        scrollbar-color: var(--color-teal) 
        var(--color-darkGray);
    }

    body::-webkit-scrollbar {
        width: var(--scrollbar-size);
    }

    body::-webkit-scrollbar-track {
        background: var(--color-darkGray);
        border-radius: 1px;
    }

    body::-webkit-scrollbar-thumb {
        background: var(--color-teal);
        border-radius: 1px;
    }

    h1,h2,h3,p{
        width: fit-content;
    }

    p{
        line-height: 2;
        text-align: justify;
        
    }

    a{
        color: inherit;
        text-decoration: underline;
        text-decoration-color: inherit;
        text-underline-offset: 0.3ex;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: inherit;
    }

        /* 遅延表示 クラスはdelayedVisibility.jsで操作*/
    /* .delayedItem {
        opacity: 0;
        will-change: opacity
    }
    
    .delayedItem.isVisible {
        opacity: 1;
        transition: 0.5s;
    } */

    /* .delayedItem.isVisible[data-delay="500"]{
        transition-delay: 500ms;
    }

    .delayedItem.isVisible[data-delay="1000"]{
        transition-delay: 1000ms;
    } */

    main{
        container-type: inline-size;
        width: var(--width-inner);
        margin: auto;
        /* ヘッダーの高さ分ずらす */
        padding-top: var(--header-height);
    }

    main .contactDialogOpen{
        width: 50%;
        padding: 0.5em;
        font-size: var(--font-size-L);
        font-family: var(--font-family-heading);
        letter-spacing: var(--letter-spacing-heading);
        color: var(--color-darkNavy);
        background-color: var(--color-white);
        transition-duration: 0.5s;
    }

    main .contactDialogOpen:hover{
        color: var(--color-white);
        background-color: var(--color-teal);
        opacity: 0.9;
    }

    @media (width <= 960px) {
        /* ヘッダーが下部に固定されるため */
        main{
            padding: 0 0 var(--header-height);
        }

        section{
            margin-bottom: 20cqw;
        }

        /* navからのスクロール調整 */
        section:is(#skills,#projects){
            scroll-margin-top: -10cqw;
        }
    }

</style>