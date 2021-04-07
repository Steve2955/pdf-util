<template>
	<div id="app">
		<a class="github-fork-ribbon" href="https://github.com/Steve2955/pdf-util" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
		<section class="hero is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						pdf-util
					</h1>
					<h2 class="subtitle">
						Merge PDFs and more directly in your browser without sending them to some server
					</h2>
				</div>
			</div>
			<div class="hero-foot">
				<nav class="tabs is-boxed is-centered">
					<div class="container">
						<ul>
							<li :class="{ 'is-active': $route.path == '/' }">
								<router-link to="/">Merge</router-link>
							</li>
							<li :class="{ 'is-active': $route.path == '/grid' }">
								<router-link to="/grid">Grid</router-link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</section>
		<div class="container px-3">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.github-fork-ribbon:before {
	background-color: #333 !important;
}
</style>
