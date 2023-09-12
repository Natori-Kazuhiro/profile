<template>
	<main id="wrap">
		<h1>「画像からテキストを抽出する」ページです！</h1>
		<div class="imageToAlt">
			<section class="inputWrap">
				<!-- 画像読み込み -->
				<div class="inputFile">
					<label class="image_zone_label">
						<input type="file" id="image_zone" accept="image/*" /><i class="fas fa-image"></i>画像を選択する
					</label>
					<p class="image_zone_fileState"></p>
				</div>
				<p class="sub">※画像を読みこむと、日本語テキストを抽出します</p>
				<!-- 読み込んだ画像を描画する -->
				<canvas id="canvas"></canvas>
			</section>
			<!-- /inputWrap -->

			<section class="outputWrap">
				<!-- コピー対象要素とコピーボタン -->
				<button id="copyText" @click="copyToClipboard">
					<i class="fas fa-clipboard"></i>テキストをコピーする
				</button>
				<p class="sub">
					※抽出されたテキストを編集して、クリップボードにコピー出来ます
				</p>
				<textarea id="outputText" type="text"></textarea>
			</section>
			<!-- /outputWrap -->
		</div>
	</main>
</template>

<script>
export default {
mounted() {
    // Tesseract.jsの読み込み
    const tesseractScript = document.createElement('script');
    tesseractScript.src = 'https://unpkg.com/tesseract.js@2.0.2/dist/tesseract.min.js';
    tesseractScript.defer = true;
    document.head.appendChild(tesseractScript);

    // Vue.jsのインスタンスがマウントされたときに特定の処理を実行
    this.runSpecialProcess();
},
methods: {
	// クリップボードへのコピー
	copyToClipboard() {
		var copyTarget = document.getElementById("outputText");
		copyTarget.select();
		// 選択しているテキストをクリップボードにコピーする
		document.execCommand("Copy");
		// コピーをお知らせする
		alert("コピーしました！ :  \n" + copyTarget.value);
	},

    runSpecialProcess() {
		const imageZone = document.getElementById("image_zone");
		imageZone.addEventListener("change", resizePinnedImage, false);

		function resizePinnedImage(e) {
			const file = e.target.files[0];
			if (!file.type.match("image.*")) {
				return;
			}
			scrapingText(file);
		}

		function resetOutputText() {
			document.getElementById("outputText").value = "...画像から文字を抽出中";
		}

		function scrapingText(file) {
			resetOutputText();
			imageToCanvas(file)
				.then(function (canvas) {
					Tesseract.recognize(
						canvas, // Canvasを認識
						"jpn" // 日本語を指定 英語はeng
					)
						// テキストの出力
						.then(({ data: { text } }) => {
							const out = document.getElementById("outputText");
							out.value = text;
						});
				})
				.catch(function (error) {
					console.error(error);
				});
		}

		function imageToCanvas(imageFile) {
			return new Promise(function (resolve, reject) {
				readImage(imageFile)
					.then(function (src) {
						loadImage(src)
							.then(function (image) {
								const canvas = document.getElementById("canvas");
								const ctx = canvas.getContext("2d");
								// スケール2倍にしてcanvasへ描画
								const scale = 2;
								canvas.width = image.width * scale;
								canvas.height = image.height * scale;
								ctx.drawImage(
									image,
									(image.width - canvas.width / scale) / 2,
									(image.height - canvas.height / scale) / 2,
									canvas.width / scale,
									canvas.height / scale,
									0,
									0,
									canvas.width,
									canvas.height
								);
								resolve(canvas);
							})
							.catch(function (error) {
								reject(error);
							});
					})
					.catch(function (error) {
						reject(error);
					});
			});
		}

		function readImage(image) {
			return new Promise(function (resolve, reject) {
				const reader = new FileReader();
				reader.onload = function () {
					resolve(reader.result);
				};
				reader.onerror = function (e) {
					reject(e);
				};
				reader.readAsDataURL(image);
			});
		}

		function loadImage(src) {
			return new Promise(function (resolve, reject) {
				const img = new Image();
				img.onload = function () {
					resolve(img);
				};
				img.onerror = function (e) {
					reject(e);
				};
				img.src = src;
			});
		}

		// ファイル名を表示する
		// input要素を取得
		const input = document.getElementById("image_zone");
		// input要素のchangeイベントリスナーを追加
		input.addEventListener("change", function() {
			console.log("changed");
			// input要素から選択されたファイルを取得
			const file = this.files[0];
			
			// p要素を取得し、ファイル名を表示
			const fileStateParagraph = document.querySelector("p.image_zone_fileState");
			fileStateParagraph.textContent = file ? file.name : "ファイルが選択されていません";
		});
	}
}
};

</script>


<style lang="scss">
@import url('https://unpkg.com/modern-css-reset/dist/reset.min.css');
@import url('https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css');
@import url('https://use.fontawesome.com/releases/v5.15.4/css/all.css');
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;900&display=swap");

:root {
	--color-orange-hsl: 7 100% 69%;
	--color-orange: hsl(var(--color-orange-hsl));
	--color-purple: rgba(111, 0, 255, 1);
	--color-blue: rgba(20, 27, 198, 1);
	--color-white: #fff;
}

body {
	width: 100%;
	height: 100%;
	margin: 0;
	overflow: hidden;
	font-family: YakuHanJP, "Noto Sans JP", sans-serif;
	font-feature-settings: "palt";
	background: linear-gradient(167deg,
			var(--color-blue),
			rgba(236, 100, 42, 0.1)),
		url(data:image/png;base64,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);

	@media (width <=750px) {
		height: 100vh;
		overflow-y: hidden;
	}
}

main {
	// グローバルなスタイルを一部リセット
	width: min(1200px, 100%);
	section, section:first-of-type{
		margin: initial;
		padding: initial;
	}

	@media (1200px >= width >= 750px){
		padding: 0 3%;
	}

	h1 {
		padding: 2em 0 1em;
		font-size: min(24px, 4vw);
		color: var(--color-white);

		@media (width <=750px) {
			padding: 5vh 0;
		}
	}

	.imageToAlt{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		@media (width <=750px) {
			height: 85vh;
			flex-wrap: nowrap;
			justify-content: space-evenly;
		}

		.inputWrap {
			width: 36%;

			.inputFile {
				display: flex;

				@media (width <=750px) {
					position: relative;
				}
			}

			.image_zone_fileState {
				@media (width <=750px) {
					position: absolute;
					inset: 120% auto 0 3em;
					margin: 0;
					font-size: 1vw;
				}
			}

			input#image_zone {
				display: none;
			}

			.image_zone_fileState {
				display: flex;
				padding: 0.5em 1em 0.5em 0.5em;
				color: var(--color-white);
				align-items: center;

				@media (width <=750px) {
					position: absolute;
					inset: 120% auto 0 3em;
					margin: 0;
					font-size: 1vw;
				}
			}

			#canvas {
				width: fit-content;
				max-width: 90%;
				height: fit-content;
				max-height: 70vh;
				display: block;

				@media (width <=750px) {
					max-width: 100%;
					height: auto;
					max-height: 70vh;
					margin-bottom: auto;
				}
			}
		}

		.outputWrap {
			width: 64%;

			#outputText {
				width: 100%;
				height: 70vh;
				padding: 1em;
				font-size: min(7vw, 22px);

				input {
					padding-top: 1em;
				}
			}

			textarea {
				vertical-align: top;
			}
		}

		.inputWrap,
		.outputWrap {
			display: flex;
			width: 48%;
			flex-direction: column;
			font-size: min(12px, 2vw);
			color: var(--color-white);

			@media (width <=750px) {
				width: 48%;
				height: 80vh;
				flex-direction: column-reverse;
			}

			.sub {
				padding: 1em 0 2em;
				font-size: min(12px, 2vw);
				color: var(--color-white);

				@media (width <=750px) {
					padding: 1em 0 2em;
					font-size: 1vw;
				}
			}
		}

		.inputWrap .image_zone_label,
		.outputWrap #copyText {
			width: min(400px, 100%);
			height: auto;
			padding: 1em 0;
			position: relative;
			line-height: 1;
			text-align: center;
			font-size: min(6vw, 20px);
			font-weight: 700;
			color: var(--color-white);
			background-color: var(--color-orange);
			border-radius: 7px;
			border: none;
			cursor: pointer;

			@media (width <=750px) {
				width: 100%;
				font-size: 3vw;
			}
		}

		.inputWrap .image_zone_label:hover,
		.outputWrap #copyText:hover {
			transform: translateY(0.1em);
			transition: 0.2s;
			opacity: 0.7;
		}

		.inputWrap .image_zone_label i,
		.outputWrap #copyText i {
			position: absolute;
			inset: 1em auto 1em 1em;
		}
	}
}
</style>