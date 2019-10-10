<template>
  <v-app>
    <v-container>
      <vueper-slides :bullets=false>
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="imgItems[i % 4].src" >
          <div slot="slideContent">
            <div style="background:rgba(0,0,0,0.4);">
              <p style="text-align:left">
              <small style="color:white">{{slide.dt}}</small>
              </p>
              <p style="color:white; font-weight:bold">{{slide.content}}</p>
            </div>
        </div>
        </vueper-slide>
      </vueper-slides>
    </v-container>
    <!-- <a href="#" @click="logout">logout</a> -->
  </v-app>
</template>
<script>
/* eslint-disable */
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide } ,
  data: () => ({
  slides: [ 
  ],
  
  imgItems: [
    {
      src: require("../assets/images/background/a.jpg")
    },
    {
      src: require("../assets/images/background/b.jpg")
    },
    {
      src: require("../assets/images/background/c.jpg")
    },
    {
      src: require("../assets/images/background/d.jpg")
    } 
  ],
}),
  methods: {
    beforeSlide(eventName, params) {
    this.events += ` ${eventName},  ${JSON.stringify(params, null, 0)}`
    },
    NextSlide(eventName, params) {
    this.events += ` ${eventName},  ${JSON.stringify(params, null, 0)}`
    },
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    },
    postView () {
        var token = this.$store.state.auth.token
        axios.get('http://notebottle.api.test/page/list')
        .then(function(res){
            let posts = res.data;
            for (var post of posts) { 
              this.slides.push({dt:post.created_at,content:post.content}); 
            }
        }.bind(this))
    }
  },
  mounted () {
    this.postView()
  }
}
</script>