<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    <Message v-bind:message="message" v-bind:title="title"></Message>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Message from './components/Message.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  data(){
    return {
      comics: [],
      message: '',
      title: '',
    }
  },
  components: {
    Header,
    Message,
    Footer
  },
  mounted() {
    this.updateComics()
  },
  methods: {
    newComicAdded(comics) {
      this.$comicService.addComic(comics).then(
        comics => {
          this.updateComics()
        }).catch(err => {
          let msg = err.responce.data.join(',')
          alert('Error adding comic. \n' + msg)
        })
    },
    comicAddedOrDeleted(comics) {
      this.$comicService.updateComics(comics).then( () =>{
        this.message = 'Was added, '
        this.title = comics.title
        this.updateComics
      })
    },
    updateComics() {
      this.$comicService.getAllComics().then( comics => {
        this.comics = comics
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
