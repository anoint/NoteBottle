<template>
  <div class="main"> 
    <div class="contents">
      <!-- Carousels -->
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
      imgItems: [
        {
          src: "../assets/bk.jpg"
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
html {
  background: url("../assets/bk.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.main {
  background-image: url("../assets/bk.jpg");
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