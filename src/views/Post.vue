<template>
  <div class="div" >
    <v-card>
     <v-toolbar flat color="primary" dark>
      <v-toolbar-title>나를 알아가는 공간, 노트보틀</v-toolbar-title>
    </v-toolbar>
    <v-tabs>
      <v-tab>
        <v-icon left>이야기</v-icon> 
      </v-tab>
      <v-tab>
        <v-icon left>태그</v-icon>  
      </v-tab> 
 
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-card max-width="99.8%" class="mx-auto" v-for="(slide, i) in slides" :key="i">
                <v-card-title>{{slide.dt}}</v-card-title>
                <v-card-text>{{slide.content}}</v-card-text>
                <v-card-actions>
                  <v-btn text>수정</v-btn>
                  <v-btn text>삭제</v-btn>
                </v-card-actions>
              </v-card> 
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card v-for="(tag,index) in tags" :key="index">
          <v-card-text>
            {{tag.name}}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </div>
</template>

<script>
export default {
 data: () => ({
      slides: [ 
      ],
      tags: [] 
    }),
  methods: {
    postView () {
        var token = this.$store.state.auth.token;
        axios.get('http://notebottle.api.test/page/list').then(function(res){
          let posts = res.data;
          for (var post of posts) { 
            this.slides.push({dt:post.created_at,content:post.content}); 
          }
        }.bind(this));
    },
    tagView () {
        axios.get('http://notebottle.api.test/tag/list')
        .then(function(res){
          let tags = res.data;
          for (var tag of tags) { 
            this.tags.push(tag); 
          }
        }.bind(this))
    }
  },
  mounted () {
    this.postView();
    this.tagView();
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