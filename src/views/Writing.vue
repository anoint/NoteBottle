<template>
<v-app>
  <v-container>
  <v-card color="blue lighten-5">
  <v-row>
    <v-col class="text">
    <v-textarea ref="text"
    rows="12"
    v-model="content"
    placeholder="내용을 입력해주세요"
    ></v-textarea>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-combobox
        v-model="tags"
        hide-selected
        multiple
        small-chips
        placeholder="태그를 입력하고 엔터키로 구분해주세요"
      ></v-combobox>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-btn @click="register" color="blue" dark>
      등록하기
      </v-btn>
    </v-col>  
  </v-row>
  </v-card>
  </v-container>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      content:'',
      tags:[]
    }
  },
  mounted () {
    this.$refs.text.focus()
  },
  methods: {
    register () {
        var token = this.$store.state.auth.token
        var data ={
          token:token,
          content:this.content
        }
        if(this.tags.length){
          data.tags=this.tags
        }
        axios.post('http://notebottle.api.test/page/store',data).then(res=>{
            this.$router.push({name:'post'})
        })
    }
  }
};
</script>

<style>
.v-text-field textarea{
  text-align: center;
  display:inline-block;
  vertical-align:middle;
  padding-top:120px;
  resize: none;

}

</style>