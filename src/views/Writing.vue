<template>
  <div class="div">
    <v-textarea ref="text"
    dark
    v-model="content"
    ></v-textarea>
    <v-combobox
      v-model="tags"
      dark
      hide-selected
      multiple
      small-chips
    ></v-combobox>
    <v-btn @click="register">
    등록하기
    </v-btn>
  </div>
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
        var xhr = new XMLHttpRequest();
        xhr.open('post','http://notebottle.api.test/page/store',true);
        xhr.onreadystatechange = ()=>{
          if(xhr.readyState === 4 && (xhr.status ===200 || xhr.status ===201)){
            this.$router.push({name:'post'})
          }else if(xhr.readyState === 4 && xhr.status !==200){
            alert('실패했습니다')
          }
        }
        var params = 'token='+token+'&content='+this.content
        if(this.tags.length){
          for(var item of this.tags){
            params += ('&tags[]='+item)
          }
        }
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params)
    }
  }
};
</script>

<style>
.v-text-field textarea{
  text-align: center;
}
</style>