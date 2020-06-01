<template>
  <div class="moviePost-iso">
    
    <!-- <div class="backdrop_path">
      <img :src="'https://image.tmdb.org/t/p/original/' + details.backdrop_path" />
    </div> -->

    <div class="postWrapper">

      <div id="fakeBackground" class="fakeBackground" :style="{ backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/original/' + details.backdrop_path + ')' }"></div>

      <div class="postDetailsWrapper">
        <div class="gradient-top"></div>

        <div class="movieDetails limiter1100">

          <div class="first-iso">
            <div class="poster">
              <img :src="moviesThumbnails + details.poster_path" />
            </div>

            <div class="titleETC">
              <div class="title">
                <h1>{{details.title}}</h1>
              </div>

              <div class="ratingETC">
                <div class="rating" v-if="details.vote_average != 0 || details.vote_average != ''">
                  <i class="star"></i> 
                  <div class="rating_num">{{details.vote_average}}</div>
                </div>
                <div class="runtime">
                  <i class="icono-clock"></i> 
                  <div class="runtime_num">{{details.runtime}}</div>
                  </div>
              </div>

              <div class="tags">
                <div v-for="genres in this.details.genres" :key="genres.id" class="tag">
                  {{genres.name}}
                </div>
              </div>
              
            </div>
            
          </div>

          <div class="second-iso">
            
            <div class="plotWrap">
              <div class="plot">
                <div class="plotTitle">Plot:</div>
                <div>{{details.overview}}</div>
              </div>
            </div>

          </div>

          <div class="third-iso">
            <div class="titleWrapper">
              <div class="title">Details</div>
            </div>
            
            <div class="movieInfomations">
              <div class="movieInfomations-iso" v-if="details.original_title">
                <div class="mi-title">Original Title</div>
                <div class="mi-detail">{{details.original_title}}</div>
              </div>
              <div class="movieInfomations-iso" v-if="details.budget">
                <div class="mi-title">Budget</div>
                <div class="mi-detail">{{details.budget}}</div>
              </div>
              <div class="movieInfomations-iso" v-if="details.release_date">
                <div class="mi-title">Release Date</div>
                <div class="mi-detail">{{details.release_date}}</div>
              </div>
              <div class="movieInfomations-iso">
                <div class="mi-title">Status</div>
                <div class="mi-detail">{{details.status}}</div>
              </div>
              <div class="movieInfomations-iso" v-if="details.imdb_id">
                <div class="mi-title"></div>
                <div class="mi-detail">
                  <a :href="'https://www.imdb.com/title/' + details.imdb_id" target="_blank">IMDB site</a>
                </div>
              </div>
            </div>
            
            <div class="production_companies">
              <div class="production_companies-iso" v-for="production_companies in details.production_companies" :key="production_companies.id">
                <img v-if="production_companies.logo_path" :src="'http://image.tmdb.org/t/p/w500/' + production_companies.logo_path " :alt="production_companies.name" :title="production_companies.name" />
                <div v-else class="pc_tags">{{production_companies.name}}</div>
              </div>
            </div>
            
          </div>

          <div v-if="details.tagline" class="forth-iso">
            <div class="quoteWrapper">
              <div class="quote">&#8216;</div>
              {{details.tagline}}
              <div class="quote">,</div>
            </div>
          </div>

          <!-- <div>{{ details }}</div> -->

          
        </div>
      </div>
      
    </div>

    
    










  </div>
</template>

<script>

  export default {
    data() {
      return {
        ID: this.$route.params.ID,
        details: {
          genres: '',
        },
        moviesThumbnails: 'http://image.tmdb.org/t/p/w500/',
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
  padding-bottom:0em;
  
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

  .postWrapper {
    position:relative;
    
    .fakeBackground {
      min-height: 31em;
      background-attachment: fixed;
      background-size: cover;
      background-position-y: center;
      background-position-x: center;
      background-repeat: no-repeat;
      transition: 0.3s -webkit-filter linear;
      filter: blur(0px);
      position:relative;
      z-index:1;

      &.blur {
        filter: blur(8px);
      }

      @media screen and (max-width: $pad) {
        min-height:26em;
      }

      @media screen and (max-width: $mobile) {
        min-height:20em;
      }
    }

    .postDetailsWrapper {
      margin-top:-3em;
      position:relative;
      z-index:2;

      .gradient-top {
        height:5em;
        background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 95%);
      }

      .movieDetails {
        margin-top:-14em;

        @media screen and (max-width: $mobile) {
          margin-top:-18em;
        }
      }

      .first-iso {
        display:flex;
        justify-content: flex-start;
        align-items: flex-end;

        @media screen and (max-width: $mobile) {
          flex-wrap:wrap;
        }

        .poster {
          width:12em;
          background:#fff;
          box-shadow: 0 0.25rem 1em 0 rgba(0, 0, 0, 0.3);
          padding:1em;

          @media screen and (max-width: $mobile) {
            margin:0 auto;
          }

          img {
            width:100%;
            width:192px;
          }
        }

        .titleETC {
          margin-left:2em;

          @media screen and (max-width: $mobile) {
            margin-left:0;
            width:100%;
            margin-top:1em;
          }

          .title {

            h1 {
              font-size:35px;
              font-weight:bold;
              color:#333;

            }
          }

          .ratingETC {
            display:flex;
            justify-content: flex-start;
            align-items:center;
            margin:0.5em 0;

            .rating_num {
              margin-left:0.2em;
            }

            .rating {
              font-size:28px;
              color:#333;
              display: flex;
              align-items: center;
              margin-right:0.7em;

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
                font-size: 13px;

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
            .runtime {
              font-size:28px;
              color:#333;
              display: flex;
              align-items: center;

              .runtime_num {
                margin-left:0.2em;
              }

              .icono-clock {
                margin:0;
              }
            }
          }

          .tags {
            display:flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .tag {
              font-size:20px;
              color:#fff;
              background:#ff5252;
              padding:0.3em 0.5em;
              margin-right:0.5em;
              border-radius:5px;
              margin-bottom:0.5em;
            }
          }
        }

        
      }
      
      .second-iso {
        .plotWrap {
          position:relative;
          width:70%;
          background:rgb(238, 238, 238);
          margin: 3em auto;
          padding: 1em;

          @media screen and (max-width: $mobile) {
            margin:0 0 3em 0;
            width:calc(100% - 2em);
          }

          &::after {
            z-index: -1;
            position: absolute;
            content: "";
            bottom: 15px;
            right: 10px;
            left: auto;
            width: 50%;
            top: 80%;
            max-width:300px;
            background: #777;
            -webkit-box-shadow: 0 15px 10px #777;
            -moz-box-shadow: 0 15px 10px #777;
            box-shadow: 0 15px 10px #777;
            -webkit-transform: rotate(3deg);
            -moz-transform: rotate(3deg);
            -o-transform: rotate(3deg);
            -ms-transform: rotate(3deg);
            transform: rotate(3deg);
          }

          .plot {
            //background:#131313;
            //color:#fff;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            color:#333;
            font-size:23px;
            line-height:1.3em;

            @media screen and (max-width: $mobile) {
              font-size:18px;
            }

            .plotTitle {
              font-weight:bold;
            }
          }
        }
      }

      .third-iso {
        .titleWrapper {
          border-bottom:1px solid #dddddd;
          padding-bottom:0.8em;
          margin-bottom:1.5em;

          .title {
            font-size:25px;
            font-weight:bold;
            color:#333;
          }
        }

        .movieInfomations {
          width:100%;
          max-width:1000px;

          .movieInfomations-iso {
            font-size:20px;
            display:flex;
            justify-content: flex-start;
            flex-wrap: nowrap;
            margin-bottom:1em;

            .mi-title {
              font-weight:bold;
              color:#666;
              width:10em;
            }
            .mi-detail {
              color:#333;

              a {
                color:#afb6be;
                transition:all 0.5s;
                text-decoration:none;

                &:hover {
                  color:#ff7700;
                  text-decoration:underline;
                }
              }
            }
          }
        }

        .production_companies {
          margin-top:3em;
          display:flex;
          justify-content: flex-end;
          align-items: center;
          flex-wrap: wrap;

          .production_companies-iso {
            height:5em;
            margin-right:1em;
            margin-bottom:1.5em;

            @media screen and (max-width: $mobile) {
              height:3em;
            }

             img {
              width:auto;
              height:100%;
             }

             .pc_tags {
                font-size:25px;
                color:#fff;
                background:#333;
                padding:0.3em 0.8em;
                max-width: 250px;
                line-height: 1.2em;
                text-align: center;
                border-radius:10px;
                position: relative;
                top: 50%;
                transform: translateY(-50%);

                @media screen and (max-width: $mobile) {
                  font-size:20px;
                  max-width: 200px;
                }
             }
          }
        }

      }
      
      .forth-iso {
        text-align:center;
        font-size:35px;
        font-weight:bold;
        color:#333;
        margin-top:1em;
        margin-bottom:1em;

        @media screen and (max-width: $mobile) {
          font-size:23px;
        }

        .quoteWrapper {
          display:inline-flex;
          margin:0 auto;
          align-items: center;

          .quote {
            color:#ff7700;
            font-size:80px;
            margin:0 0.3em;
          }
        }
        
      }
      
    }
  }
  
  
}


</style>