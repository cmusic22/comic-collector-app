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
				<ComicRow v-for="comics in comic" v-bind:key="comics.title" v-bind:comics="comics">
				</ComicRow>
			</table>
		</div>
	</div>
	<div class="sortComics ">
		<div id="sortTitle">
			<label for="byTitle">By Title:</label>
			<select id="byTitle">
				<option value="X-Man">X-Man</option>
				<option value="Spider Man">Spider Man</option>
				<option value="Batman">Batman</option>
				<option value="Superman">Superman</option>
			</select>
			<button class="btn go-btn">GO</button> <!--v-on:click="sortByTitle"-->
		</div>
		<div id="sortYear">
			<label for="byYear">By Year</label>
			<select id="byYear">
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
			<button class="btn go-btn">GO</button> <!--v-on:click="sortByYear"-->
		</div>
		<div id="sortCondition">
			<label for="byCondition">By Condition</label>
			<select id="byCondition">
				<option value="Mint">Mint</option>
				<option value="Like New">Like New</option>
				<option value="Used">Used</option>
			</select>
			<button class="btn go-btn">GO</button> <!--v-on:click="sortByCondition"-->
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

	},
	props: {
		comics: Array
		
	},
	methods:{
		/*get all comics from DB
		getAllComics(){

		},*/

		/*show delete button
		showDeleteButton(){

		},*/
		/*delete comic
		delteComic(){
			//make sure to ask the user if they are sure they want to delete the comic
		}*/
		/*sorting methods
		sortByCondition(){
			let condition = getElementById('byCondition').value();
			if(condition == 'Mint'){
				//get & return comics with condion set as mint
				//return comics from DB
				return console.log();
			}else if (condition == 'Like New') {
				//get & return comics with like new condition
				//return comics from DB
				return console.log(); 
			}else if (condition == 'Used') {
				//get & return comics with like new condition
				//return comics from DB
				return console.log();
			}else{
				//display prompt to user that there are no comics with that condition
				return console.log('No comics with condition: ', condition);
			}
		}

		sortByYear(){
			if(){

			}else{
				return
			}
		}

		sortByTitle(){
			if(){

			}else{
				return
			}
		}
		***End sorting methods**/
	}
	

	//commic deleated method that calls the function and presents the message


}
</script>
<style>
/*sorting section styling*/
.sortComics {display: inline-block;} 
.go-btn {} /*go button styling*/
</style>