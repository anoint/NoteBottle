<template>
  <div>
    this is home
    <a href="#" @click="logout">logout</a>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  methods: {
    logout () {
      this.$store.dispatch('logoutProcess').then(()=>{this.$router.push({name:'login'})})
    }
  }
}
</script>