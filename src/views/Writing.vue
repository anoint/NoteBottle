<template>
<v-app>
  <v-container>
  <v-row>
    <v-col>
    <v-textarea ref="text"
      background-color="grey lighten-4"
      color="orange orange-darken-4"
    v-model="content"
    ></v-textarea>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-combobox
        background-color="grey lighten-4"
        color="orange orange-darken-4"
        v-model="tags"
        hide-selected
        multiple
        small-chips
      ></v-combobox>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-btn @click="register">
      등록하기
      </v-btn>
    </v-col>  
  </v-row>
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
}
</style>