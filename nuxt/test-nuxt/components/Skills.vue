<template>
  <section id="skills" class="delayedItem">
    <h2>skills</h2>
    <div class="skillsWrap">
      <div class="skill">
        <h3>web develop</h3>
        <ul>
          <li>HTML,Pug</li>
          <li>CSS,SASS,SCSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Vue.js,Nuxt.js</li>
          <li>liquid</li>
          <li>Three.js</li>
          <li>Python</li>
          <li>Node.js,npm-scripts,Gulp</li>
          <li>Git,Github,Gitlab</li>
        </ul>
      </div>
      <div class="skill">
        <h3>CMS,EC,NoCode</h3>
        <ul>
          <li>WordPress</li>
          <li>STUDIO</li>
          <li>webflow</li>
          <li>BASE</li>
          <li>Shopify</li>
        </ul>
      </div>
      <div class="skill">
        <h3>design</h3>
        <ul>
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Affinity Publisher</li>
          <li>Affinity Designer</li>
          <li>Affinity Photo</li>
        </ul>
      </div>
      <div class="skill">
        <h3>movie</h3>
        <ul>
          <li>shooting,editing,lighting</li>
          <li>XDCAM,HDCAM</li>
          <li>XPRI NS</li>
          <li>Adobe Premiere Pro</li>
        </ul>
      </div>
    </div>
    <div class="details">
      <h3>details</h3>
      <div class="detail">
        <h4>web develop<span>―コーディング・フロントエンド</span></h4>
        <p>
          Web開発のフロントエンド領域で、幅広いスキルセットを駆使し、魅力的で高機能なウェブページを構築します。<br />
          デザインとコーディングの融合により、ユーザーフレンドリーなユーザーエクスペリエンスを提供し、特にランディングページやコーポレートサイト、サービスサイトの制作が得意です。<br />
          フロントエンドのタスクランナーを活用して開発プロセスを効率化し、品質を確保します。<br />
          また、Gitを用いた協力開発をサポートし、チームでの協力を円滑に進めます。フロントエンド開発において、幅広いニーズに対応します。
        </p>
      </div>
      <div>
        <h4>CMS,EC,NoCode<span>―CMS・EC・ノーコード開発</span></h4>
        <p>
          多くのプラットフォームで経験を積んでおり、クライアントの要件に合わせて最適なソリューションを提供します。<br />
          ショッピングサイトからコーポレートウェブサイト、ノーコード開発まで、幅広いプロジェクトに対応できます。<br />
          デザインとコーディングのスキルを活かし、オンラインビジネスの成功に貢献します。
        </p>
      </div>
      <div class="detail">
        <h4>design<span>―ウェブデザイン・グラフィックデザイン</span></h4>
        <p>
          幅広いデザインツールを巧みに扱い、美しく魅力的なデザインを創り出します。<br />
          Webデザインやプロトタイプ制作に加え、DTPやグラフィックデザインの領域でも幅広く対応します。<br />
          特に、ミニマルなデザインや精密な文字組みを得意とし、デザインにおける洗練されたアプローチを提供します。<br />
          ワイヤーフレームからデザイン、実装までの一貫した開発プロセスをスムーズに進行させ、プロジェクトに価値と品質をもたらします。
        </p>
      </div>
      <div class="detail">
        <h4>movie<span>―動画カメラマン</span></h4>
        <p>
          業務用カメラを使用した映像制作において、高品質な映像撮影と編集を提供します。<br />
          報道、ENG、スタジオ、ロケなど、様々なシチュエーションでの動画撮影と報道映像の編集が得意です。<br />
          放送局での放映が可能な品質で撮影し、クライアントに卓越した映像コンテンツを提供します。
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import delayedVisibilityMixin from "@/mixins/delayedVisibility"; // ミックスインをインポート

export default {
  mixins: [delayedVisibilityMixin], // ミックスインを使用する
};
</script>

<style lang="scss" scoped>
#skills {
  /* navからのスクロール調整 */
  scroll-margin-top: var(--header-height);
    @media (width <= 960px) {
      scroll-margin-top: 5cqw;
    }

  .skillsWrap {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);

    @media (width <=960px) {
      grid-template: repeat(2, max-content) / 1fr;
    }

		.skill{
			h3 {
				margin-bottom: 0.5em;
			}

			ul {
				margin-bottom: 3em;
				font-size: var(--font-size-S);
				line-height: 1.7;

        @media (width <=960px) {
          font-size: var(--font-size-M);
        }
      }
		}
	}

	.details{
    h4{
      font-size: var(--font-size-M);
      font-family: var(--font-family-heading);

      span{
        font-size: 0.7em;

        @media (width <=960px) {
          display: block;
          text-align: end;
          margin-bottom: 1em;
        }
      }
    }

    p {
      margin-bottom: 3em;
    }
  }
}
</style>