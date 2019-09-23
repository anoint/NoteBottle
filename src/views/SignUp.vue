<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          Sign Up 
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            dark
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
            dark
            v-model="name"
            :counter="10"
            label="NAME"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
           dark
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
          <v-btn @click="signUp">
            signUp
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
      password: '',
      name: ''
    }),
    methods: {
      signUp () {
        this.$store.dispatch('signUpProcess',{id:this.id,password:this.password,name:this.name}).then((res)=>{
          this.$router.push({name:'login'})
        })
      }
    }
  }
</script>