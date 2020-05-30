<template>
  <div class="moviePost-iso limiter1300">
    
    <div class="title">
      <h1>{{details.title}}</h1> 
    </div>
    

    <div class="backdrop_path">
      <img :src="'https://image.tmdb.org/t/p/original/' + details.backdrop_path" />
    </div>

    <div class="detailsWrap">
      <div class="gradient-top"></div>
      <div class="details">
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>
        <div>{{details.overview}}</div>

        <div>{{ details }}</div>
      </div>
    </div>
    












    
  </div>
</template>

<script>

  export default {

    data() {
      return {
        ID: this.$route.params.ID,
        details: {},
      }
    },
    created() {
      this.$http.get('https://api.themoviedb.org/3/movie/' + this.ID + '?api_key=0a2c307e58764f38de216f1c5e2d7384&language=en-US').then(function(data){
        this.details = data.body;
      });
    }

  }

</script>

<style lang="scss" scoped>

.moviePost-iso {
  position:relative;
  padding-top:7.5em;
  padding-bottom:0em;

  .title {
    width:100%;
    max-width:1300px;
    position:fixed;
    z-index:5;
    background: linear-gradient(0deg, rgba(255,255,255,0) 5%, rgba(19, 19, 19 ,1) 35%);
    padding: 1em 0em 3em 0em;

    h1 {
      font-size:35px;
      font-weight:bold;
      color:#fff;
      margin-left:0.5em;

    }
  }
  

  .backdrop_path {
    position:fixed;
    max-width:1300px;
    height: 30em;
    overflow: hidden;

    img {
      width:100%;
      opacity:0.5;
    }
  }

  .detailsWrap {
    position:relative;
    z-index:3;
    padding-top:26em;

    .gradient-top {
      height:5em;
      background: linear-gradient(0deg, rgba(19,19,19,1) 45%, rgba(255,255,255,0) 90%);
    }

    .details {
      background:#131313;
      color:#fff;
    }
  }
}


</style>