<template>
	<tr class="comic-row" v-bind:class="comics.title">
		<td>{{comics.title}}</td>
		<td>{{comics.issue}}</td>
		<td>{{comics.month}}</td>
		<td>{{comics.year}}</td>
		<td>{{comics.condition}}</td>
		<td>{{comics.pricePaid}}</td>
		<td>{{comics.currentPrice}}</td>
		<td>{{comics.forSale}}</td>
	</tr>
</template>
<script>
export default {
	name:'ComicRow',
	data() {
		return {
			comics: []
		}
	},
	methods: {
		getComics() {
      		this.$comicService.getAllComics().then( comics => {
        	this.comics = comics
      	})
	}
}
</script>