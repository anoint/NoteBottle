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
     <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label="Select a favorite activity or create a new one"
          multiple
        ></v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label="I use chips"
          multiple
          chips
        ></v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          :items="items"
          label="I use a scoped slot"
          multiple
          chips
        >
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
                class="accent white--text"
                left
                v-text="data.item.slice(0, 1).toUpperCase()"
              ></v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
      <v-col cols="12">
        <v-combobox
          v-model="select"
          label="I'm readonly"
          chips
          multiple
          readonly
        ></v-combobox>
      </v-col>
    </v-row>
  </v-container>
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