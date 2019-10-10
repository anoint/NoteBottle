<template>
  <div class="div" >
    <v-card>
     <v-toolbar flat color="primary" dark>
      <v-toolbar-title>나를 알아가는 공간, 노트보틀</v-toolbar-title>
    </v-toolbar>
    
        <v-card flat>
          <v-card-text>
            <v-card max-width="99.8%" class="mx-auto" v-for="(slide, i) in slides" :key="i">
                <v-card-title>{{slide.dt}}</v-card-title>
                <v-card-text>{{slide.content}}</v-card-text>
                <v-card-actions>
                  <v-btn text @click="goEdit(slide.id)">수정</v-btn>
                  <v-btn text>삭제</v-btn>
                </v-card-actions>
              </v-card> 
          </v-card-text>
        </v-card>
  </v-card>
  </div>
</template>

<script>
export default {
 data: () => ({
      slides: [ 
      ] 
    }),
  methods: {
    postView () {
        var token = this.$store.state.auth.token
        var query = this.$router.currentRoute.fullPath.replace('/result','');
        axios.get('http://notebottle.api.test/search'+query).then(res=>{
            let posts = res.data;
            for (var post of posts) { 
              this.slides.push({dt:post.created_at,content:post.content,id:post.id}); 
            }
        })
    },
    goEdit(id){
      this.$router.push({name:'edit',params:{id:id}})
    }
  },
  mounted () {
    this.postView()
  }
};
</script>

<style>
.theme--light.v-card
{
    color: #aaa !important;
    font-size:10px;
    margin-bottom: 10px;
} 
.div
{
  width: 932px;
  height: auto;
  position: absolute;
  top: 0px;
  left:0px;
}
</style>