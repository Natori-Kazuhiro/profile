<template>
	<section id="fv">
		<h1>
			<span class="delayedItem" data-delay="500">Kazuhiro Natori</span><br />
			<span class="delayedItem" data-delay="1000">―front end engineer</span>
		</h1>
		<button class="contactDialogOpen js-contactDialogOpen">contact</button>
	</section>
</template>


<style scoped>
#fv {
	margin-top: 10cqw;
}

#fv h1 {
	margin-bottom: 2em;
	font-size: 76px;
	font-family: var(--font-family-heading);
	letter-spacing: var(--letter-spacing-heading);
	line-height: 1.8;
}

#fv h1 span:nth-child(1) {
	margin-bottom: 1em;
}

@media (width <=960px) {
	#fv {
		margin-top: 20cqw;
	}

	#fv h1 {
		font-size: 14vw;
		margin-bottom: 1em;
		line-height: 1.3;
	}

}
</style>