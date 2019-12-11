<template>
	<div class="hello">
		<transition name="fade">
			<div class="alert alert-success" v-if="seeMessage">{{message}} {{title}}</div>
		</transition>
	</div>
</template>
<script>
export default {
	name: 'Message',
	data() {
		return {
			seeMessage: false
		}
	},
	props: {
		message: String,
		title: String
	},
	watch: {
		message() {
			this.seeMessage = true
			setTimeout( () => {
				this.seeMessage = false
			}, 3000)
		}
	}	
}	
</script>
<style>
</style>