<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    <Message></Message>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Message from './components/Message.vue'
import Footer from './components/Footer.vue'
import ComicForm from './components/ComicForm.vue'
export default {
  name: 'app',
  data(){
    return {
      comics: []
      //put message here
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
      this.$Comic_api.addComic(comics).then(
        comics => {
          this.updateComics()
        }).catch(err => {
          let msg=err.responce.data.join(',')
          alert('Error adding comic. \n' + msg)
        })
    },
    updateComics() {
      this.$Comic_api.getAllComic().then( comics => {
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
