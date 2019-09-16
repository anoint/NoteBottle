<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          {{$store.getters.isLogined}}
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
      }
    }
  }
</script>