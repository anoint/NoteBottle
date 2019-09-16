<template>
  <div>
    this is home
    <vueper-slides>
      <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content"></vueper-slide>
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
    {
      title: 'Slide #1',
      content: 'Slide content.'
    } ,
     {
      title: 'Slide #2',
      content: 'Slide content.'
    } 
  ]
}),
  methods: {
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    }
  }
}
</script>