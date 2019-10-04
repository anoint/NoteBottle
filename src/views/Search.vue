<template>
  <div class="div">
    검색
    <v-text-field dark></v-text-field>
    <div class="row">
      <div class="col-md-6" v-for="(tag, index) in tags" :key="index">
        <v-card
        >
          <v-card-text style="line-height:100px">{{tag.name}}</v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags:[]
    }
  },
  methods: {
    load () {
        var token = this.$store.state.auth.token
        var xhr = new XMLHttpRequest();
        xhr.open('get','http://notebottle.api.test/tag/list',true);
        xhr.onreadystatechange = ()=>{
          if(xhr.readyState === 4 && (xhr.status ===200 || xhr.status ===201)){
            this.tags = JSON.parse(xhr.responseText)
          }else if(xhr.readyState === 4 && xhr.status !==200){
            alert('실패했습니다')
          }
        }
        xhr.send()
    }
  },
  mounted () {
    this.load()
  }
};
</script>

<style>
</style>