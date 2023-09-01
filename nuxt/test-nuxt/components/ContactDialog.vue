<template>
	<!-- モーダル -->
	<dialog id="contactDialog">
		<div class="contactDialogInner js-contactDialogInner">
			<iframe id="contactDialogIframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfxlrSsCUGl79m6VLtDI5Vq0_FpmrwZ9XzwKqoyLhZLE5cHlA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
			<button class="contactDialogClose js-contactDialogClose"><span></span>close</button>
		</div>
	</dialog>
</template>

<style lang="scss">
#contactDialog {
	width: 95cqw;
	height: auto;
	max-height: 90vh;
	margin: auto;
	overflow: hidden;
	opacity: 0; /* 初期状態で透明にする */

	@media (width <=960px) {
		width: 100%;
	}

	&::backdrop {
		background: rgba(0, 0, 0, 0.7);
	}

	#contactDialogIframe {
		width: 100%;
		opacity: 0; /* 初期状態で透明にする */
		transition: opacity 1s ease; /* フェードインにアニメーションを適用 */
	}

	.contactDialogInner {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.contactDialogClose {
		position: absolute;
		inset: 0 0 auto auto;
		width: 6em;
		height: 6em;
		border: none;
		padding-top: 3em;
		font-size: 1cqw;
		font-family: var(--font-family-heading);
		letter-spacing: var(--letter-spacing-heading);
		background-color: var(--color-darkNavy);
		border-radius: 10%;
		cursor: pointer;

		@media (width <=960px) {
			inset: 0 0 auto auto;
			width: 10vw;
			height: 10vw;
			padding-top: 8%;
		}
	}

	span,
	span::after {
		content: "";
		position: absolute;
		inset: 0;
		width: 2.5em;
		height: 1px;
		background-color: var(--color-white);

		@media (width <=960px) {
			width: 7vw;
		}
	}

	span {
		inset: 2em 1.7em auto auto;
		transform: rotate(45deg);

		@media (width <=960px) {
			inset: 43% 16% auto auto;
		}
	}

	span::after {
		transform: rotate(-95deg);
	}
}

#contactDialog[open]{
		opacity: 1; /* 初期状態で透明にする */
		transition: opacity 1s ease; /* フェードインにアニメーションを適用 */

		#contactDialogIframe {
			opacity: 1;
			transition: opacity 1s ease; /* フェードインにアニメーションを適用 */
	}
}
</style>