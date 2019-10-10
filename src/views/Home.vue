<template>
  <div>
    <vueper-slides :bullets=false @before-slide="beforeSlide" @slide="NextSlide">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.dt" :content="slide.content" ></vueper-slide>
    </vueper-slides>
    <a href="#" @click="logout">logout</a>
  </div>
</template>
<script>
/* eslint-disable */
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide } ,
  data: () => ({
  slides: [ 
  ] 
}),
  methods: {
    beforeSlide (eventName, params) {
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