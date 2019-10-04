<template>
  <div>
    <vueper-slides>
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
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    },
    postView () {
        var token = this.$store.state.auth.token
        var xhr = new XMLHttpRequest();
        xhr.open('get','http://notebottle.api.test/page/list',true);
        xhr.onreadystatechange = ()=>{
          if(xhr.readyState === 4 && (xhr.status ===200 || xhr.status ===201)){ 
            let posts = JSON.parse(xhr.response);
            for (var post of posts) { 
              this.slides.push({dt:post.created_at,content:post.content}); 
            }
          } 
        } 
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send()
    }
  },
  mounted () {
    this.postView()
  }
}
</script>