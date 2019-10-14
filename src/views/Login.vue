<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          Login 
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="id"
            :counter="10"
            label="ID"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="password"
            type="password"
            password
            :counter="10"
            label="PW"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
           <v-btn @click="signUp" style="margin-right:50px;">
            signUp
          </v-btn>
          <v-btn @click="login">
            login
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      id: '',
      password: ''
    }),
    methods: {
      login () {
        this.$store.dispatch('loginProcess',{id:this.id,password:this.password}).then((res)=>{
          this.$router.push({name:'home'})
        })
      },
      signUp () { 
          this.$router.push({name:'signup'}) 
          // alert('이동이 안됭 오류도 없어');
      }
    }
  }
</script>