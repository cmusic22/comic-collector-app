<template>
<div>
	<div class="card comic-list m-2 p-2">
		<h2 class="card-title">Comics</h2>
		<div id="vue-table comic-table ">
			<table class="table">
				<tr>
					<th>Title</th>
					<th>Issue</th>
					<th>Month</th>
					<th>Year</th>
					<th>Condition</th>
					<th>Price Paid</th>
					<th>Current Value</th>
					<th>For Sale?</th>
				</tr>
				<ComicRow v-for="comic in comics" v-bind:key="comic.title" v-bind:comic="comic">
				</ComicRow>
			</table>
		</div>
	</div>
	<!--filter section-->
	<div class="sortComics ">
		<h3>Filters</h3>
		<div id="sortTitle">
			<label for="byTitle">By Title:</label>
			<select class="filters" id="byTitle">
				<option value="X-Man">X-Man</option>
				<option value="Spider Man">Spider Man</option>
				<option value="Batman">Batman</option>
				<option value="Superman">Superman</option>
			</select>
			<button class="btn go-btn mb-2" v-on:click="sortByTitle()">GO</button> 
		</div>
		<div id="sortYear">
			<label for="byYear">By Year</label>
			<select class="filters" id="byYear">
				<option value="1965">1965</option>
				<option value="1966">1966</option>
				<option value="1967">1967</option>
				<option value="1968">1968</option>
				<option value="1969">1969</option>
				<option value="1970">1970</option>
				<option value="1971">1971</option>
				<option value="1972">1972</option>
				<option value="1973">1973</option>
				<option value="1974">1974</option>
				<option value="1975">1975</option>
				<option value="1976">1976</option>
				<option value="1977">1977</option>
				<option value="1978">1978</option>
				<option value="1979">1979</option>
			</select>
			<button class="btn go-btn mb-2" v-on:click="sortByYear()">GO</button>
		</div>
		<div id="sortCondition">
			<label for="byCondition">By Condition</label>
			<select class="filters" id="byCondition">
				<option value="Mint">Mint</option>
				<option value="Like New">Like New</option>
				<option value="Used">Used</option>
			</select>
			<button class="btn go-btn mb-2" v-on:click="sortByCondition()">GO</button>
		</div>	
	</div>
</div>
</template>
<script>
import ComicRow from '@/components/ComicRow.vue'
export default {
	name: 'ComicTable',
	components:{ComicRow},
	data() {
		return {comics: []}
	},
	props: {
		//comics: Array
		
	},
	mounted() {
		this.getAllComics()
	},
	methods:{
		getAllComics(){
			this.$comicService.getAllComics().then(comics => {
					this.comics = comics
			})
		},

		/*show delete button
		showDeleteButton(){

		},*/
		/*delete comic
		delteComic(){
			//make sure to ask the user if they are sure they want to delete the comic
		}*/
		/*sorting methods*/
		sortByCondition(){
			let c = document.getElementById('byCondition').value();
			let condition = c.options[c.selectedIndex].value;
			if(condition == 'Mint'){//get & return comics with condion set as mint
				this.$comicService.getComicByCondition(condition).then(comics =>{
					this.comics = comics //return comics from DB
				})						
			}else if (condition == 'Like New') {
				this.$comicService.getComicByCondition(condition).then(comics =>{
					this.comics = comics //return comics from DB
				})
			}else if (condition == 'Used') {
				this.$comicService.getComicByCondition(condition).then(comics =>{
					this.comics = comics //return comics from DB
				})
			}else{
				//display prompt to user that there are no comics with that condition
				return this.push('No comics with condition: ', condition);
			}
		},

		sortByYear(){
			let y = document.getElementById('byCondition');
			let year = y.options[y.selectedIndex].value;
			if(year == year){
				this.$comicService.getComicByYear(year).then(year =>{
					this.year = year	
				})
			}else{
				return this.push('There are no comics from year ', + year)
			}
		},
		
		sortByTitle(){
			let t = document.getElementById('');
			let title = t.options[t.selectedIndex].value;
			if(title == title){
				this.$comicService.getComicByTitle(title).then(comics =>{
					this.comics = comics
				})
			}else{
				return this.push('There are no comics with the title ', + title)
			}
		}
		
	}


}
</script>
<style>
/*sorting section styling*/
.sortComics {display: inline-block;} 
#sortTitle, #sortYear, #sortCondition {float: left; display: flex; margin: 0px 10px;}
select {
	margin: 5px; 
}
.filters{
	display: block;
	padding:0.375rem 0.75rem;
	border:1px solid #000;
	border-radius: 0.25rem;
}
/*go button styling*/
button.go-btn {
	border:1px solid black;
	border-radius: 3px;
	margin:0 2px;
} 
</style>