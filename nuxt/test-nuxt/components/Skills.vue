<template>
	<section id="skills" class="delayedItem">
		<h2>skills</h2>
		<div class="skillWrap">
			<div class="skill">
				<h3>web</h3>
				<ul>
					<li>HTML,Pug</li>
					<li>CSS,SASS,SCSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Vue.js,Nuxt.js</li>
					<li>Three.js</li>
					<li>Python</li>
					<li>Node.js,npm-scripts,Gulp</li>
					<li>Git,Github,Gitlab</li>
				</ul>
			</div>
			<div class="skill">
				<h3>design</h3>
				<ul>
					<li>STUDIO</li>
					<li>webflow</li>
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
		<h3>details</h3>
		<p>
			web―コーダー・マークアップエンジニア<br />
			HTML、CSS、JavaScriptなどを使用したコーディング、各種デバイスやクロスブラウザーの対応、レスポンシブWebデザインやアクセシビリティに関する知識があります。<br />
			その他にも、バージョン管理システムを使用したコード管理などのデータ管理、チーム内のナレッジ管理やルール制定、テンプレートエンジンなどを使用したマークアップの効率化を行ってきました。<br />
			また、STUDIOやwebflowなどノーコード系の開発ツールを使用する事が出来ます。<br />
		</p>
		<br />
		<p>
			design―グラフィックデザイナー<br />
			Illustratorなどを使用して、WebやDTP、プロダクト用のグラフィックデザインを制作する事が出来ます。<br />
			ミニマルなデザインや精密な文字組みが得意です。
		</p>
		<br />
		<p>
			movie―動画カメラマン<br />
			XDCAMなどの業務用カメラでのスタジオ撮影、報道・ENG撮影と映像編集が可能です。<br />
			放送局での放映可能なクオリティで撮影を行う事が出来ます。<br />
		</p>
	</section>
</template>

<script>
import delayedVisibilityMixin from '@/mixins/delayedVisibility'; // ミックスインをインポート

export default {
	mixins: [delayedVisibilityMixin], // ミックスインを使用する
};
</script>

<style scoped>
#skills .skillWrap {
	display: grid;
	grid-template: 1fr / repeat(3, 1fr);
}

#skills .skill h3 {
	margin-bottom: 0.5em;
}

#skills .skill ul {
	margin-bottom: 3em;
	font-size: var(--font-size-S);
	line-height: 1.7;
}

@media (width <=960px) {
	#skills .skillWrap {
		grid-template: repeat(2, max-content) / 1fr 1fr;
	}
}
</style>