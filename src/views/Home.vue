<template>
  <v-app>
    <v-container>
      <vueper-slides :bullets=false 
                    @before-init="logEvents"
                    @ready="logEvents"
                    @before-slide="logEvents" 
                    @slide="logEvents"
                    initSlide=this.postCnt-this.extraNum>
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="imgItems[i % imgItems.length].src">
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
  curIdx: 0,
  postCnt: 5,
  postNum: 1,
  extraNum: 2,
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
    logEvents (eventName, params) {
      var lastIdx = this.slides.length-1;
      this.events += ` ${eventName},  ${JSON.stringify(params, null, 0)}`
      // console.log(eventName +"이벤트입니다.")
      // console.dir(params)
      // console.log(params.currentSlide.index);
        this.curIdx = params.currentSlide.index;
       
        if(this.curIdx === this.lastIdx - this.extraNum)
        {
          this.postView (postCnt, postNum);
        }
       
    },
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    },
    postView (postCnt, postNum) {
        var token = this.$store.state.auth.token 
        axios.get('http://notebottle.api.test/page/list?count='+ postCnt +'&offset=' + postNum)
        // axios.get('http://notebottle.api.test/page/list/',{ params : {
          // "count": postCnt, "offset": postNum
        // }})
        .then(function(res) {
            let posts = res.data;
            for (var post of posts) { 
              this.slides.push({dt:post.created_at,content:post.content}); 
            }
        }.bind(this))
    },

  },
  mounted () {
    this.postView(5,1)
  }
}
</script>