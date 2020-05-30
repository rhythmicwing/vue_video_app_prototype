<template>
  <div id="app">
    <div class="topBar" id="topBar">
      <div class="limit">
        <router-link to="/">
          <div class="logo">
            <div class="the">The</div>
            <div class="movie">
              <div class="fakeLogo">
                <div class="charaterM">M</div>
              </div>
              <div class="ovie">ovie</div>
            </div>
          </div>
        </router-link>

        <div class="navigation">
          <router-link to="/">Home</router-link>
          <router-link to="/TP">TP</router-link>
        </div>
      </div>
    </div>
    <!-- <searchIso /> -->
    <!-- <topPage /> -->
    <router-view></router-view>
  </div>
</template>

<script>
//import searchIso from './components/searchIso.vue'
//import topPage from './components/topPage.vue'

export default {
  name: 'App',
  components: {
    //searchIso
    //topPage
  },
  mounted(){
    window.onscroll = function () {

      var check = window.pageYOffset;
      console.log(check);

      if (check >= 100) {
        document.getElementById("topBar").classList.add('fixed');
      }

      if (check < 100) {
        document.getElementById("topBar").classList.remove('fixed');
      }

    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.topBar {
  background:#FFFFFF;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  padding:0.5em 1em;
  width:calc(100% - 2em);

  &.fixed {
    background:rgba(255, 255, 255, 0.9);
    position:fixed;
    z-index:99;
  }
  

  .limit {
    width:100%;
    max-width:1300px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;

    .logo {
      position:relative;
      text-align:right;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

      .the {
        font-size:20px;
        font-weight:bold;
        color:#fff;
        color:#1E1C23;
        position:absolute;
        left: 4.4em;
        top: 0.5em;
      }

      .movie {
        font-size:35px;
        color:#1E1C23;

        .fakeLogo {
          display:inline-block;
          position:relative;
          font-size:55px;

          &::after {
            content: "";
            position:absolute;
            width:1em;
            height:1em;
            background:#FF7700;
            border-radius:50%;
            left:50%;
            top:50%;
            transform: translate(-50%, -50%);
            z-index:1;
          }

          .charaterM {
            position:relative;
            z-index:2;
            color:#fff;
            font-size:1.35em;
          }
        }

        .ovie {
          display:inline-block;
          margin-left:0.1em;
          position: absolute;
          bottom: 0.3em;
          left: 1.6em;
        }

      }
    }

    .navigation {
      letter-spacing: 2px;
      font-weight: bold;
      font-size: 18px;
      margin-left:3em;
      align-self:center;

      a {
        text-decoration: none;
        color:#afb6be;
        transition: all 0.5s;

        &:hover {
          color:#FF7700;
        }
      }
    }

  }
  
}
</style>
