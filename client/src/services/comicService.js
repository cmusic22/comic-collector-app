//This file connects the database to the server/app
import axios from 'axios'
const listURL='api/comics-list'

export default {
	getAll(){
		return axios.get(listURL).then( response => {
			return response.data
		})
	},
	addComic(comics){
		return axios.post(listURL).then(response => {
			return response.data
		})
	}
}