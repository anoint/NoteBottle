<template>
  <div>
    <h3>{{posts.created_at}}</h3>
    <h2>{{posts.content}}</h2>
    <div v-for="(tag, i) in posts.tags" :key="i">
      #{{tag.name}}
    </div>
    <a href="#" @click="logout">logout</a>
  </div>
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
      var id =this.$route.query.id;
      axios.get('http://notebottle.api.test/page/'+id)
        .then((result) => {
          this.posts = result.data;
          console.log(result.data)
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