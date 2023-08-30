<template>
  <section id="skills" class="delayedItem">
    <h2>skills</h2>
    <div class="skillsWrap">
      <div class="skill">
        <h3>web</h3>
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
          <li>WordPress</li>
          <li>Git,Github,Gitlab</li>
        </ul>
      </div>
      <div class="skill">
        <h3>design</h3>
        <ul>
          <li>STUDIO</li>
          <li>webflow</li>
          <li>Figma</li>
          <li>BASE</li>
          <li>Shopify</li>
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
        <h4>web<span>―コーディング・フロントエンド</span></h4>
        <p>
          幅広いフロントエンド開発のスキルを持っており、ウェブサイトの魅力的なUIとパフォーマンスを実現するためにスキルを活かしてきました。<br />
          HTML、CSS、JavaScriptなどを使用したコーディング、各種デバイスやクロスブラウザーの対応、レスポンシブWebデザインやアクセシビリティに関する知識があります。<br />
          その他にも、バージョン管理システムを使用したコード管理などのデータ管理、チーム内のナレッジ管理やルール制定、テンプレートエンジンなどを使用したマークアップの効率化を行ってきました。<br />
        </p>
      </div>
      <div class="detail">
        <h4>design<span>―ウェブデザイン・グラフィックデザイン</span></h4>
        <p>
          多様なデザインスキルで、WebデザインやDTPデザイン、グラフィックデザインを制作する事が出来ます。<br />
          特にミニマルなデザインや精密な文字組みが得意です。<br />
          また、私はSTUDIOやwebflowなどのノーコード開発ツールも使用できるため、デザインから実装まで一貫した開発をスムーズに行うことが可能です。<br />
        </p>
      </div>
      <div class="detail">
        <h4>movie<span>―動画カメラマン</span></h4>
        <p>
          XDCAMなどの業務用カメラでのスタジオ撮影、報道・ENG撮影と映像編集が可能です。<br />
          放送局での放映可能なクオリティで撮影を行う事が出来ます。<br />
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
  .skillsWrap {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);

    @media (width <=960px) {
      grid-template: repeat(2, max-content) / 1fr 1fr;
    }

		.skill{
			h3 {
				margin-bottom: 0.5em;
			}

			ul {
				margin-bottom: 3em;
				font-size: var(--font-size-S);
				line-height: 1.7;
			}
		}
	}

	.details{
    h4{
      font-size: var(--font-size-M);
      font-family: var(--font-family-heading);

      span{
        font-size: 0.7em;
      }
    }

    p {
      margin-bottom: 2em;
    }
  }
}
</style>