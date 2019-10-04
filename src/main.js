import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import AuthModule from './vuex/auth'
import '@mdi/font/css/materialdesignicons.css'
const vuetifyOptions = { } 
Vue.use(Vuetify)
Vue.use(Vuex)


const mainStore = new Vuex.Store({
  modules: {
    auth: AuthModule
  }
})

router.beforeEach((to,from,next)=>{

  
  if(mainStore.getters.isLogined)
  {
    return next();
  }else if(to.name=='login' || to.name=='signup' ){
    return next();
  }else if(from.name!='login'){
    router.push({name:'login'});
  }
});
Vue.config.productionTip = false
var cookies = document.cookie.split(';');
cookies.forEach(cookie=>
{
  if(cookie.indexOf('notebottleToken')==0){
    var value = cookie.split('=')[1];
    mainStore.commit('login')
    mainStore.commit('saveToken',value)
  }
})
new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  store:mainStore,
  render: h => h(App)
}).$mount('#app')
