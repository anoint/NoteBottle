<template>
  <div id="app" >
    <div id="nav" v-if="$router.currentRoute.name!='login'">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <a href="#" @click="logout">logout</a>
    </div>
    <div class="main"> 
      <div class="contents">
        <router-view />
      </div>
      <div class="gnb-right-wrap">
        <!-- <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>-->

        <!-- Navigation drawers -->
        <v-card height="350px" class="font-white" style="z-index:1;">
          <v-navigation-drawer absolute permanent right>
            <template v-slot:prepend>
              <v-list-item two-line>
                <v-list-item-avatar>
                  <img src="https://randomuser.me/api/portraits/women/81.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Jane Smith</v-list-item-title>
                  <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-item v-for="item in items" :key="item.title">
                <div @click="gnb(item.title)">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      items: [
        { title: "내글", icon: "mdi-home-city" },
        { title: "글쓰기", icon: "mdi-account" },
        { title: "검색", icon: "mdi-account-group-outline" },
        { title: "이전글보기", icon: "mdi-account-group-outline" }
      ],
      imgItems: [
        {
          src: "./assets/images/background/a.jpg"
        },
        {
          src: "./assets/images/background/b.jpg"
        },
        {
          src: "./assets/images/background/c.jpg"
        },
        {
          src: "./assets/images/background/d.jpg"
        } 
      ]
    };
  },
  methods: {
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    },
    gnb(menu)
    {
      if(menu === '내글')
      {
        //  this.$router.push('/post') 
        this.$router.replace({ name: 'post' }).catch(err => { 
        })
      }
      else if(menu === '글쓰기')
      { 
        this.$router.replace({ name: 'writing' }).catch(err => { 
        })
      }
       else if(menu === '검색')
      { 
        this.$router.replace({ name: 'search' }).catch(err => { 
        })
      }
       else if(menu === '이전글보기')
      { 
        this.$router.replace({ name: 'viewPre' }).catch(err => { 
        })
      }

    }
  }
};
</script>

<style>
.theme--light.v-card,
.theme--light.v-navigation-drawer {
  cursor: pointer;
  /* background-color: transparent !important; */
  color: #fff !important;
}
.font-white {
  color: #fff !important;
}
.v-window__container--is-active {
  height: 100% !important;
}
html {
  background: url("./assets/bk.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.main {
  background-image: url("./assets/bk.jpg");
  border: 0;
  padding: 0;
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
.contents {
  position: absolute;
  left: 17%;
  top: 15%;
  width: 920px;
  height: 660px;
  background: #aaa;
}
.gnb-right-wrap {
  position: absolute;
  top: 0;
  right: 0;
  width: 14%;
  height: 100%;
  background: transparent;
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
</style>