<template>
    <section id="projects" class="delayedItem">
        <h2>projects</h2>
        <div class="projectItems">
            <div class="projectItem">
                <a class="projectItemLink" href="https://toricowear.myshopify.com/" target="_blank" rel="noopener">
                    <h3>虜</h3>
                    <p class="projectImage">
                        <img src="/img/projects_image_torico.webp" decording="async" loading="lazy" alt="イメージ画像" width="1901" height="931" />
                    </p>
                </a>
                <div class="projectItemInfo">
                    <p>ECサイト(Shopify)―全ページのコーディング</p>
                    <p>HTML/CSS/JavaScript/Liquid/Shopify</p>
                </div>
                <p>
                    テーマ・アプリ選定とテーマ編集のコーディング・テンプレート改修を行いました。<br />
                    シンプルなトンマナで全体で一貫させるために、細かい配慮を行ってテンプレート改修やカスタムCSSを書きました。<br />
                    商品表示の更新作業を、コード編集ではなくCMS内で完結出来るようにliquidで実装したのもポイントです。
                </p>
            </div>
            <div class="projectItem">
                <a class="projectItemLink" href="https://lp.moeplus.site/" target="_blank" rel="noopener">
                    <h3>moeplus</h3>
                    <p class="projectImage">
                        <img src="/img/projects_image_moeplus.webp" decording="async" loading="lazy" alt="イメージ画像" width="1901" height="931" />
                    </p>
                </a>
                <div class="projectItemInfo">
                    <p>
                        <a href="https://lp.moeplus.site/" target="_blank" rel="noopener">LP</a>と<a href="https://www.moeplus.site/" target="_blank" rel="noopener">ECサイト(BASE)</a><br />
                        LP―全LPのコーディング,BASE―全ページのテンプレート改修(一部デザイン提案)
                    </p>
                    <p>HTML/CSS/JavaScript/BASE</p>
                </div>
                <p>
                    4つのLPとBASEの各ページを横断するサイト設計になっています。<br />
                    LPとBASE内でレギュレーションが違うという条件の中で、全てのページで見た目の違和感が出ないような実装・CSSレイアウトを行いました。
                </p>
            </div>
            <div class="projectItem">
                <a href="./projects/chainGeometry/" target="_blank" rel="noopener">
                    <h3>Three.jsの鎖</h3>
                    <p class="projectImage">
                        <img src="/img/projects_image_chainGeometry.webp" decording="async" loading="lazy" alt="イメージ画像" />
                    </p>
                </a>
                <div class="projectItemInfo">
                    <p>Webアニメーション―デザイン・コーディング</p>
                    <p>HTML/CSS/Three.js/JavaScript</p>
                </div>
                <p>
                    Three.jsを使用してみたかったので制作しました。<br />
                    鎖は自分の好きなオブジェクトです。標準のジオメトリーでは表現が難しかったので、そこが凝ったポイントです。<br />
                    パスを使用して鎖の1つをつくり、それをループさせて鎖のように見せています。金属的なテクスチャーやスタジオライティングで、「写真のテクスチャーを使わずにリアルに見せる」ようにしました。<br />
                    簡単なマウスインタラクションを実装したので、マウスを移動させてみてください。
                </p>
            </div>
            <div class="projectItem">
                <a class="projectItemLink" href="./projects/scrapingAlt/" target="_blank" rel="noopener">
                    <h3>画像から日本語テキストを抽出するページ</h3>
                    <p class="projectImage">
                        <img src="/img/projects_image_scrapingAlt.webp" decording="async" loading="lazy" alt="イメージ画像" width="1918" height="931" />
                    </p>
                </a>
                <div class="projectItemInfo">
                    <p>Webサイト―デザイン・コーディング</p>
                    <p>HTML/CSS/JavaScript/Python</p>
                </div>
                <p>
                    画像から日本語テキストを抽出してテキスト化、抽出したテキストをクリップボードへのコピーが出来ます。<br />
                    画像が中心のサイトを制作する際に、「altの文字起こし」を行いたいというモチベーションで作りました。<br />
                    コードへのリテラシーに関わらず使用出来るようにしたかったので、ローカルからではなくブラウザから実行出来るようにしました。<br />
                    ブラウザから実行出来るPythonのライブラリTesseractを利用しています。
                </p>
            </div>

            <div class="projectItem">
                <a class="projectItemLink" href="https://moribus.jp/service/casting/" target="_blank" rel="noopener">
                    <h3>Moribus</h3>
                    <p class="projectImage">
                        <img src="/img/projects_image_moribus.webp" decording="async" loading="lazy" alt="moribus" width="1918" height="931" />
                    </p>
                </a>
                <div class="projectItemInfo">
                    <p>LP―コーディング</p>
                    <p>HTML/CSS/JavaScript/jQuery</p>
                </div>
                <p>
                    適切なレスポンシブ対応をしつつ、パフォーマンスのいいサイトになるように工夫しました。<br />
                    画像を多用したページですが、重いページにならないように工夫しています。
                </p>
            </div>
            <div class="projectItem">
                <a class="projectItemLink" href="https://needle-biyou.com/lporder/002/nc-056S7DO3BGG/" target="_blank" rel="noopener">
                    <h3>ヤーマン/ニードルリフトクリーム</h3>
                    <p class="projectImage">
                        <img src="/img/projects_image_yaman.webp" decording="async" loading="lazy" alt="イメージ画像" width="1901" height="931" />
                    </p>
                </a>
                <div class="projectItemInfo">
                    <p>LP―コーディング</p>
                    <p>HTML/CSS/JavaScript</p>
                </div>
                <p>
                    動きの要件を満たしつつ、パフォーマンスのいいLPになるように実装しました。<br />
                    選択肢によって表示が切り替わるアプリのような見た目にしています。
                </p>
            </div>
        </div>
        <!-- /.projectItem -->
    </section>
</template>

<style scoped>
    #projects .projectItems{
        display: grid;
        grid-template: 1fr 1fr / 1fr;
        grid-column-gap: 5em;
        font-size: var(--font-size-S);
    }

    #projects .projectItems .projectItemInfo{
        margin-bottom: 2em;
    }

    #projects .projectItems .projectItemInfo > p{
        font-size: 1.3em;
    }

    #projects .projectItem{
        margin-bottom: 20cqw;
    }

    #projects .projectImage{
        margin-bottom: 5%;
        overflow: hidden;
    }

    #projects .projectImage img{
        transition: transform 0.5s ease;
    }

    #projects .projectImage:hover img{
        transform: scale(1.05);
    }

    @media (width <= 960px) {
        #projects .projectItems{
                grid-template: repeat(2, max-content) / 1fr;
            }
    }

</style>