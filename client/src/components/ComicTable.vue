<template>
<div>
	<div class="card comic-list m-2 p-2">
		<h2 class="card-title">Comics</h2>
		<div id="comic-table">
			<table class="table">
				<tr>
					<th>Title</th>
					<th>Issue</th>
					<th>Month</th>
					<th>Year</th>
					<th>Condition</th>
					<th>Price Paid</th>
					<th>Current Price</th>
					<th>For Sale?</th>
				</tr>
				<ComicRow v-for="comics in comics" v-bind:key="comics.title" v-bind:comics="comics">
				</ComicRow>
			</table>
		</div>
	</div>
</div>
</template>
<script>
import ComicRow from '@/components/ComicRow.vue'
export default {
	name: 'ComicTable',
	data() {

	},
	components:{ComicRow},
	props: {
		comics: Array
	},
	methods: {
		//commic deleated method that calls the function and presents the message
	}

}
</script>