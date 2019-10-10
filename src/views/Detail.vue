<template>
  <div>
    {{posts.dt}}
    {{posts.content}}
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
    postDetail(id) {
      axios.get('http://notebottle.api.test/page/'+id)
        .then((result) => {
          this.$router.push({name:'detail',query:{id:result.id}})
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