const auth = {
    state: {
      isLogined: true,
      token: ''
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
        document.cookie = "notebottleToken="+token+";"
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
              resolve(xhr)
            }else if(xhr.readyState === 4 && xhr.status !==200){
              reject(xhr)
            }
          }
          var params = 'id='+data.id+'&password='+data.password
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send(params)
        })
      },
      signUpProcess (context,data) {
        return new Promise((resolve,reject)=>{
          var xhr = new XMLHttpRequest();
          xhr.open('post','http://notebottle.api.test/register',true);
          xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4 && xhr.status ===200){  
              resolve(xhr)
            }else if(xhr.readyState === 4 && xhr.status !==200){
              reject(xhr)
            }
          }
          var params = 'id='+data.id+'&password='+data.password+'&name='+data.name
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send(params)
        })
      },
      logoutProcess (context,data) {
        return new Promise((resolve,rejesct)=>{
          context.commit('logout')
          context.commit('saveToken','')
          resolve()
        })
      }
    }
  }

  export default auth;