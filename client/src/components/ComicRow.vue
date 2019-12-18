<template>
	<tr class="comic-row" v-bind:class="comic.title">
		<td>{{comic.title}}</td>
		<td>{{comic.issue}}</td>
		<td>{{comic.month}}</td>
		<td>{{comic.year}}</td>
		<td>{{comic.condition}}</td>
		<td>{{comic.pricePaid}}</td>
		<td>{{comic.currentValue}}</td>
		<td>{{comic.forSale}}</td>
	</tr>
</template>
<script>
export default {
	name:'ComicRow',
	props: {
		comic: Object
	}
}
</script>