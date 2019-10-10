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
}
</style>