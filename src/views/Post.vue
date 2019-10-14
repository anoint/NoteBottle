<template>
  <v-app>
    <v-container>
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
            <v-card max-width="99.8%" class="mx-auto" v-for="(slide, i) in slides" :key="i" >
                <v-card-title>{{slide.dt}}</v-card-title>
                <v-card-text @click="postDetail(slide.id)">{{slide.content}}</v-card-text>
                {{slide.id}}
                <v-card-actions>
                  <v-btn text @click="goEdit(slide.id)">수정</v-btn>
                  <v-btn text @click="postDelete(slide.id)">삭제</v-btn>
                </v-card-actions>
              </v-card> 
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card v-for="(tag,index) in tags" :key="index" @click="searchTag(tag.name)">
          <v-card-text>
            {{tag.name}}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
 data: () => ({
      slides: [ 
      ],
      tags: [] 
    }),
  methods: {
    postDetail(id) { 
        this.$router.push({name:'detail',params:{id:id}})
    },
    postView () {
        var token = this.$store.state.auth.token;
        axios.get('http://notebottle.api.test/page/list').then(function(res){
          let posts = res.data;
          for (var post of posts) { 
            this.slides.push({dt:post.created_at,content:post.content,id:post.id}); 
          }
        }.bind(this));
    },
    postDelete(id)
    {
      console.log(id)
      if(confirm("삭제하시겠습니까?"))
      {
        axios.get('http://notebottle.api.test/page/remove/'+id)
        .then((result) => {
          console.log('삭제되었습니다.')
          this.slides = [];
          this.postView();
        })
        .catch((err) => {
          console.log(err)
          console.log('오류입니다.')

        })
      }
    },
    tagView () {
        axios.get('http://notebottle.api.test/tag/list')
        .then(function(res){
          let tags = res.data;
          for (var tag of tags) { 
            this.tags.push(tag); 
          }
        }.bind(this))
    },
    searchTag(tag){
      this.$router.push({name:'result',query:{tag:tag}})
    },
    goEdit(id){
      this.$router.push({name:'edit',params:{id:id}})
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
</style>