<template>
  <div class="search-iso">
    <div>search here</div>
    <input type="text" v-model="request" @keyup="resultBack(request)" />

    <div v-for='result in results' :key='result.id'>
      <p>{{result.title}}</p>
      <img :src="searchThumbnails + result.poster_path">
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'search-iso',
  
  data() {
    return {
      request: '',
      results: '',
      searchThumbnails: 'http://image.tmdb.org/t/p/w185/',
    }
  },
  methods: {
    resultBack(request){
      if(this.request != 0) {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=0a2c307e58764f38de216f1c5e2d7384&query=" + request).then(response => { this.results = response.data.results })
        console.log(this.results)
      }
      
    }
  }

}
</script>


<style lang="scss" scoped>



</style>
