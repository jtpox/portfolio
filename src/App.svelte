<script>
	import Router, { link } from 'svelte-spa-router';

	import routes from './routes.js';

	let navToggled = false;
</script>

<nav class="navbar fixed-top navbar-dark">
	<div class="container-fluid">
		<button
			class="navbar-toggler btn btn-primary"
			type="button"
			on:click="{() => navToggled = !navToggled}">
			<span class="navbar-toggler-icon" />
		</button>
	</div>
</nav>

<div
	class="wrapper">
	<div
		class="main-nav-links {navToggled === true ? 'show' : ''}">
		<div class="container">
			<ul class="nav-ul">
				<li>
					<a
						href="/"
						on:click="{() => navToggled = !navToggled}"
						class="nav-link"
						use:link>
						Home
					</a>
				</li>

				<li>
					<a
						href="/about"
						on:click="{() => navToggled = !navToggled}"
						class="nav-link"
						use:link>
						About
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="page {navToggled === true ? 'switcher' : ''}">
		<Router {routes} />
	</div>
</div>

<style lang="scss" global>
	@import "src/scss/portfolio";
</style>