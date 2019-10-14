<template>
  <div id="app" >
    <div class="main"> 
      <h1 class="logo">NOTE BOTTLE  <v-icon style="color:#2196F3">mdi-message</v-icon> </h1>
      <div class="contents override">
        <router-view ref="rView" style="margin:0 auto" />
      </div>
      <div class="gnb-right-wrap" v-if="$router.currentRoute.name!='login' && $router.currentRoute.name!='signup'"> 

        <!-- Navigation drawers -->
        <v-card height="100%" style="z-index:1;">
          <v-navigation-drawer absolute permanent right dark style=" background-color:#1E88E5"> 
            <v-list style="height:100%">
              <v-list-item class="white-text" style="cursor:pointer" v-for="(item, index) in items" :key="item.title" :style="{height:(100/(items.length))+'%'}">
              <div style="margin: 0 auto" @click="gnb(item.name)" v-if="!($router.currentRoute.name=='home' && index===items.length-1)">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </div>  
              <div style="margin: 0 auto" v-if="$router.currentRoute.name=='home' && index===items.length-1" @click="beforePost">
                <v-list-item-icon>
                  <v-icon>mdi-undo</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>이전글보기</v-list-item-title>
                </v-list-item-content>
              </div>  
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
      routerName : this.$router.currentRoute.name,
      items: [
        { title: "내글", icon: "mdi-account-details", name : 'post'},
        { title: "글쓰기", icon: "mdi-border-color", name : 'writing' },
        { title: "검색", icon: "mdi-magnify", name : 'search' },
        { title: "글보기", icon: "mdi-equal-box", name : 'home' }
      ],
      backgroundImage:"none",
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
      ],
    };
  },
  methods: {
    
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    },
    gnb(name)
    {
      
      //  this.$router.push('/post') 
        this.$router.replace({ name: name }).catch(err => { 
          })
          this.routerName = name
      
    },
    beforePost()
    {
      this.$refs.rView.$emit('prev');
    }
  },
  mounted () {
    var i = 0;
    // setInterval(()=>{
    //   this.backgroundImage = this.imgItems[i].src
    //   i = (i+1)%4
    // },8000)
  }
};
</script>

<style>
.theme--light.v-navigation-drawer {
  cursor: pointer;
  color: #fff !important;
}
.font-white {
  color: #fff !important;
}
.v-window__container--is-active {
  height: 100% !important;
}
.main {
  position: relative;
  padding-top:8vh;
  padding-left:100px;
  padding-right:100px;
  background-size: cover;
  transition: background 0.5s linear;
  opacity: 1.0;
}
.logo{
  text-align: left;
  font-size:20pt; 
  z-index:3;
  margin-top:0; 
  width:89%;
  margin-bottom:20px
}
.contents {
  position: relative;
  width:91%;
  color:white;
  z-index: 2;
}
.gnb-right-wrap {
  position: fixed;
  top: 0;
  right: 0;
  width: 9%;
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
.override .v-application--wrap {
  min-height:1vh !important
}
</style>