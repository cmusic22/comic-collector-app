//This file connects the database to the server/app
import axios from 'axios'
const listURL='/api/comics-list'

export default {
	getAllComics(){
		return axios.get(listURL).then( response => {
			return response.data
		})
	},
	getComicByYear(year){//this function should return comics with the matching year
		    return axios.get(listURL, year).then( response => {
		 	 	return response.data
		    })
		
	},
	getComicByCondition(condition){//thisfunction should retern comics with matching condition
		return axios.get(listURL, condition).then(response => {
			return response.data
		})
	},
	addComic(comics){
		return axios.post(listURL, comics).then(response => {
			return response.data
		})
	},
	updateComics(comics) {
		return axios.patch(`${listURL}/${comics.id}`, comics).then(response => {
			return response.data
		})
	},
	deleteComics(id){
		return axios.delete(`${listURL}/${id}`).then(response => {
			return response.data
		})
	}
}