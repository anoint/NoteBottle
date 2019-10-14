<template>
  <v-app>
    <v-container>
      <div class="div">
        <v-text-field @keydown.enter="searchKeyword(keyword)" v-model="keyword" placeholder="검색할 키워드를 입력해주세요"></v-text-field>
        <div class="row">
          <div class="col-md-6" v-for="(tag, index) in tags" :key="index">
            <v-card
            @click="searchTag(tag.name)"
            dark
            :color="colors[index%colors.length]"
            >
              <v-card-text style="line-height:100px">{{tag.name}}</v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      tags:[],
      keyword:"",
      colors: [
        'red',
        'green',
        'blue',
        'purple',
        'amber'
      ]
    }
  },
  methods: {
    load () {
        var token = this.$store.state.auth.token
        axios.get('http://notebottle.api.test/tag/list').then(res=>{
            this.tags = res.data
        })
    },
    searchTag(tag){
      this.$router.push({name:'result',query:{tag:tag}})
    },
    searchKeyword(keyword){
      this.$router.push({name:'result',query:{keyword:keyword}})
    }
  },
  mounted () {
    this.load()
  }
};
</script>
