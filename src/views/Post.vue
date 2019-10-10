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
                  <v-btn text @click="postUpdate()">수정</v-btn>
                  <v-btn text @click="postDelete()">삭제</v-btn>
                </v-card-actions>
              </v-card> 
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            asdfdsf
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
      ] 
    }),
  methods: {
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
    },
    postDelete()
    {
      if(confirm("삭제하시겠습니까?"))
      {
        var token = this.$store.state.auth.token
        var xhr = new XMLHttpRequest();
        xhr.open('get','http://notebottle.api.test/page/remove',true);
        xhr.onreadystatechange = ()=> {
          if(xhr.readyState === 4 && (xhr.status ===200 || xhr.status ===201)){ 
            
          } 
        } 
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send()
      }
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