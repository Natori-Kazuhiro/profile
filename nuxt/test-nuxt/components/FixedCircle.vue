<template>
	<p :class="{ 'isFiltered': isFiltered }" id="fixedCircle"></p>
</template>

<script>
export default {
	data() {
		return {
			isFiltered: false
		};
	},
	mounted() {
		const fixedCircle = document.getElementById('fixedCircle');
		const fv = document.getElementById('fv');
		
		// FVを超えてスクロールすると色変更のクラスを付与する
		const fixedCircleObserver = new IntersectionObserver(
			([entry]) => {
				this.isFiltered = !entry.isIntersecting;
			}
		);

		if (fixedCircle && fv) {
			// 監視対象を定義する
			fixedCircleObserver.observe(fv);
		}
	}
};
</script>


<style lang="scss">
#fixedCircle {
	position: fixed;
	inset: auto -15vw -10vw auto;
	width: 50vw;
	height: 50vw;
	border-radius: 50%;
	background:
		linear-gradient(0deg, rgba(255, 121, 0, 1), rgba(195, 69, 69, 0)),
		linear-gradient(162deg, rgba(255, 255, 255, 1), rgba(255, 0, 255, 0)),
		url("data:image/svg+xml,%3Csvg viewBox='0 0 74 74' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
	mix-blend-mode: difference;
	filter: saturate(3);
	opacity: 0.7;
	transition: 0.5s;

	@media (width <=960px) {
		width: 100vw;
		height: 100vw;
	}

	&.isFiltered {
		opacity: 0.05;
		transition: 1.2s;
		filter: hue-rotate(180deg) saturate(0);
	}
}
</style>