<template>
  <div id="app" >
    <div class="main" :style="appStyle"> 
      <div class="dimmed">

      </div>
      <div class="contents">
        <router-view />
      </div>
      <div class="gnb-right-wrap" v-if="$router.currentRoute.name!='login'">
        <!-- <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>-->

        <!-- Navigation drawers -->
        <v-card height="100%" dark style="z-index:1;">
          <v-navigation-drawer absolute permanent right>

            <v-list style="height:100%">
              <v-list-item class="white-text" v-for="item in items" :key="item.title" :style="{height:(100/(items.length))+'%'}">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
        { title: "Users2", icon: "mdi-account-group-outline" }
      ],
      backgroundImage:require("./assets/images/background/d.jpg"),
      imgItems: [
        {
          src: require("./assets/images/background/a.jpg")
        },
        {
          src: require("./assets/images/background/b.jpg")
        },
        {
          src: require("./assets/images/background/c.jpg")
        },
        {
          src: require("./assets/images/background/d.jpg")
        }
        // },
        // {
        //   src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        // },
        // {
        //   src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        // },
        // {
        //   src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        // }
      ]
    };
  },
  computed: {
      appStyle () { 
        return {
          "background-image":"url('"+this.backgroundImage+"')"
        }
      }
  },
  methods: {
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    }
  },
  mounted () {
    var i = 0;
    setInterval(()=>{
      this.backgroundImage = this.imgItems[i].src
      i = (i+1)%4
    },8000)
  }
};
</script>

<style>
.theme--light.v-card,
.theme--light.v-navigation-drawer {
  background-color: transparent !important;
  color: #fff !important;
}
.font-white {
  color: #fff !important;
}
.v-window__container--is-active {
  height: 100% !important;
}
.main {
  min-height: 100vh;
  position: relative;
  padding-top:25vh;
  padding-left:100px;
  padding-right:100px;
  background-size: cover;
  transition: background 1.5s linear;
  opacity: 1.0;
}
.contents {
  position: relative;
  margin:0 auto;
  width: 70%;
  height: 100%;
  color:white;
  z-index: 2;
  background: rgba(0,0,0,0.4);
}
.gnb-right-wrap {
  position: absolute;
  top: 0;
  right: 0;
  width: 14%;
  height: 100%;
  background: transparent;
  z-index: 3;
}
.item {
  width: 100%;
  height: 25%;
  position: relative;
  background: rgba(96, 171, 76, 0.4);
  border: 1px solid #fff;
}
</style>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.dimmed  {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0,0,0,.6);
}
</style>