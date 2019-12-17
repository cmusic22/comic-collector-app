<template>
	<div class="footer">
	<div>
		<ul class="footer-nav">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/comics-list">Comic List</router-link></li>
			<li><router-link to="/about">About</router-link></li>
		</ul>
	</div>
	<div>
		<p>Comic Book Collection Tracker &copy;</p>
	</div>
</div>
</template>
<script>
export default {
	name: 'Footer'
}
</script>
<style>
	.footer {
		text-align: center;
	}
	.footer-nav {
		list-style-type: none;
		text-align: center;
	}
	.footer-nav li {
		float: left;
		padding: 5px 10px;
	}
</style>