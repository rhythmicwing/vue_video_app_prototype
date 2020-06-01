<template>
  <div class="topPage limiter1300">

    <div class="movie-iso" v-for='result in results' :key='result.id'>

      <div class="overall_rating">
        <div class="rating_ribbon">
          <div class="ribbon_top"></div>
          <div class="ribbon_bottom"></div>
        </div>
        <div class="rating">
          {{result.vote_average}}
          <i class="star"></i>
        </div>
        <div class="rating_shadow"></div>
      </div>

      <router-link class="movie-link" :to="'/post/' + result.id">

        <img class="mi-thumb" loading="lazy" :src="moviesThumbnails + result.poster_path">

        <div class="details">
          <p class="movie-title">{{result.title}}</p>
          <p class="movie-overview">{{result.overview.slice(0, 100) + "..."}}</p>
        </div>
        
      </router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'topPage',
  
  data() {
    return {
      request: '',
      results: '',
      moviesThumbnails: 'http://image.tmdb.org/t/p/w500/',
      topRatedMovies: 'https://api.themoviedb.org/3/movie/top_rated?api_key=0a2c307e58764f38de216f1c5e2d7384&language=en-US',
      popularMovies: 'https://api.themoviedb.org/3/movie/popular?api_key=0a2c307e58764f38de216f1c5e2d7384&language=en-US',
      upcomingMovies: 'https://api.themoviedb.org/3/movie/upcoming?api_key=0a2c307e58764f38de216f1c5e2d7384&language=en-US&page=1',
      latestMovies: 'https://api.themoviedb.org/3/movie/latest?api_key=0a2c307e58764f38de216f1c5e2d7384&language=en-US',
    }
  },
  methods: {
    
  },
  mounted() {
    axios.get(this.popularMovies).then(response => {this.results = response.data.results})
  }

}
</script>


<style lang="scss" scoped>

.topPage {
  display:flex;
  justify-content:space-between;
  flex-wrap: wrap;

  &::after {
    content:"";
    width:20%;

    @media screen and (max-width: $pad) {
      width:27%;
    }

    @media screen and (max-width: $mobile) {
      width:38%;
    }
  }

  .movie-link {
  }

  .movie-iso {
    width:20%;
    margin-bottom:2em;
    //border-radius:8px;
    box-shadow: 0 0.25rem 1em 0 rgba(0, 0, 0, 0.19);
    padding: 1em;
    position:relative;

    &:hover {
      .mi-thumb {
        opacity:0.4;

        @media screen and (max-width: $pad) {
          opacity:0.85;
        }
      }

      .details {
        bottom:0;
      }
    }

    @media screen and (max-width: $pad) {
      width:27%;
    }

    @media screen and (max-width: $mobile) {
      width:38%;
    }

    .overall_rating {
      position:absolute;
      z-index:6;
      right:-0.65em;
      top:1.8em;
      display: flex;
      justify-content: flex-end;

      .rating_ribbon {
        position: relative;
        z-index:3;

        .ribbon_top {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 21px 20px 0;
          border-color: transparent #ff7700 transparent transparent;

          @media screen and (max-width: $pad) {
            border-width: 0 15px 15px 0;
          }
        }
        .ribbon_bottom {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 20px 21px;
          border-color: transparent transparent #ff7700 transparent;

          @media screen and (max-width: $pad) {
            border-width: 0 0 15px 15px;
          }
        }
      }

      .rating {
        position:relative;
        z-index:3;
        background:#ff7700;
        padding:0.5em;
        color:#fff;
        font-size:20px;
        font-weight:bold;

        @media screen and (max-width: $pad) {
          font-size:15px;
        }

        .star {
          position: relative;
          
          display: inline-block;
          width: 0;
          height: 0;
          
          margin-left: .9em;
          margin-right: .9em;
          margin-bottom: 1em;
          
          border-right:  .3em solid transparent;
          border-bottom: .7em  solid #FC0;
          border-left:   .3em solid transparent;

          /* Controlls the size of the stars. */
          font-size: 10px;

          @media screen and (max-width: $pad) {
            font-size:7px;
          }
          
          &:before, &:after {
            content: '';
            
            display: block;
            width: 0;
            height: 0;
            
            position: absolute;
            top: .6em;
            left: -1em;
          
            border-right:  1em solid transparent;
            border-bottom: .7em  solid #FC0;
            border-left:   1em solid transparent;
          
            transform: rotate(-35deg);
          }
          
          &:after {  
            transform: rotate(35deg);
          }
        }
      }

      .rating_shadow {
        position: absolute;
        z-index:2;
        right: 0px;
        bottom: -0.43em;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 7px 10px 0 0;
        border-color: #be4300 transparent transparent transparent;
      }
    }

    a {
      display:block;
      background:#000;
      position:relative;
      overflow:hidden;
      height:0;
      padding-bottom: 150%;

      .mi-thumb {
        transition:all 0.3s;
        opacity:0.85;
        position:absolute;
        height:100%;
        width:auto;
        left:50%;
        transform: translateX(-50%);

        @media screen and (max-width: $pad) {
          opacity:0.85;
        }
      }

      .details {
        position:absolute;
        transition:all 0.4s;
        bottom:calc(-100%);
        z-index:1;
        color:#fff;
        padding:1em;

        @media screen and (max-width: $pad) {
          bottom:0;
          background:rgba(0, 0, 0, 0.7);
          width:calc(100% - 2em);
        }

        .movie-title {
          font-size:18px;
          font-weight:bold;
          line-height:1.3em;
          padding-bottom:1em;

          @media screen and (max-width: $pad) {
            text-decoration:none;
            padding-bottom:0;
            line-height:1.3em;
            font-size:15px;
          }

        }
        .movie-overview {
          font-size:16px;
          line-height:24px;

          @media screen and (max-width: $pad) {
            display:none;
          }

          @media screen and (max-width: $mobile) {
            display:none;
          }
        }
      }
    }

    

  }
}

</style>
