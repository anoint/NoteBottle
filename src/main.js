import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.use(Vuex)

const AuthModule = {
  state: {
    isLogined: true,
    token: ' '
  },
  getters: {
    isLogined: state => {
      return state.token!=='' && state.isLogined;
    }
  },
  mutations: {
    login (state) {
      state.isLogined = true
    },
    logout (state) {
      state.isLogined = false
    },
    saveToken (state, token) {
      state.token = token
    }
  },
  actions: {
    loginProcess (context,data) {
      return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open('post','http://notebottle.api.test/login',true);
        xhr.onreadystatechange = ()=>{
          if(xhr.readyState === 4 && xhr.status ===200){
            context.commit('login')
            context.commit('saveToken',xhr.responseText)
          }
        }
        var params = 'id='+data.id+'&password='+data.password
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params)
      })
      context.commit('login')
    }
  }
}

const mainStore = new Vuex.Store({
  modules: {
    auth: AuthModule
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  Vuetify,
  store:mainStore,
  render: h => h(App)
}).$mount('#app')
