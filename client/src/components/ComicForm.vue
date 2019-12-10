<template>
<div>
	<h1 class="display-4" id="title">Enter A Comic Book</h1>
	<!--Shows Errors, if any, when trying to submit a comic-->
	<div class="alert alert-danger" v-show="errors && errors.length > 0">
		<li v-for="error in errors" v-bind:key="error">{{error}}</li>
	</div>
	<div>
		<label for="title">Title: </label>
		<input id="title" type="text" v-model.trim="title">
	</div>
	<div>
		<label for="issue">Issue Number: </label>
		<input id="issue" type="text" v-model.trim="issue">
	</div>
	<div>
		<label for="month">Month: </label>
		<input type="text" id="month" v-model.trim="month">
	</div>
	<div>
		<label for="year">Year: </label>
		<input type="number" id="year" v-model.trim="year">
	</div>
	<div>
		<label for="condition">Condition: </label>
		<select id="condition" v-model.trim="condition">
			<option value="mint">Mint</option>
			<option value="like new">Like New</option>
			<option value="used">Used</option>
		</select>
	</div>
	<div>
		<label for="pricePaid">Price Paid: </label>
		<input type="number" id="pricePaid" v-model.trim="pricePaid">
	</div>
	<div>
		<label for="currentValue">Current Value: </label>
		<input type="number" id="currentValue" v-model.trim="currentValue">
	</div>
	<div>
		<label for="forSale">Is it for sale? </label>
		<input type="checkbox" id="forSale" v-model.trim="forSale">
	</div>
	<button class="btn btn-primary" v-on:click.prevent="addComic">Enter Comic</button>
	<router-link class="btn comicList-btn" to="/comic-list">View Comic List</router-link>
</div>
	

</template>
<script>
export default {
	name: 'ComicForm',
	data() {
		return {
			title: '',
			issue: '',
			month: '',
			year: '',
			condition: '',
			pricePaid: '',
			currentValue: '',
			forSale: '',
			errors: []
		}
	},
	methods: {
		addComic() {
			this.errors = []
			if (this.title && this.issue && this.month && this.year && this.condition && this.pricePaid && this.currentValue && this.forSale) {
				let comics = {title: this.title, issue: this.issue, month: this.month, year: this.year, condition: this.condition, pricePaid: this.pricePaid, currentValue: this.currentValue, forSale: this.forSale}
				//add $emit for the message
				this.title = ''
				this.issue = ''
				this.month = ''
				this.year = ''
				this.condition = ''
				this.pricePaid = ''
				this.currentValue = ''
				this.forSale = ''
			} else {
				this.errors.push('All feilds required') 
			}
		}
	}
}	
</script>
<style>
.comicList-btn {
	background-color: lightgreen;
}
</style>