<template>
  <v-app>
    <v-container>
  <div>
    <h3>{{posts.created_at}}</h3>
    <h2>{{posts.content}}</h2>
    <div v-for="(tag, i) in posts.tags" :key="i">
      #{{tag.name}}
    </div>
    <a href="#" @click="logout">logout</a>
  </div>
    </v-container>
  </v-app>
</template>
<script>
/* eslint-disable */
export default {
  data: () => ({
  posts: [ 
  ] 
}),
  methods: {
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    },
    postDetail() {
      // var id = this.$router.currentRoute.params.id;
      var id = this.$route.params.id
      axios.get('http://notebottle.api.test/page/'+id)
        .then((result) => {
          this.posts = result.data;
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted () {
    this.postDetail()
  }
}
</script>
<style scoped>
h2,h2,div {
  color: #111;
}
</style>