import Vue from 'vue'
import App from './App.vue'
// import config from './config'
// import {BaseData} from './config'
// import {login} from './api/user';
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// login({}).then(res=>{
//   console.log(res);
// })
// console.log(process.env.VUE_APP_ENV)
// console.log(process.env.VUE_APP_MOCK)
// console.log(process.env.VUE_APP_DEBUG)
// console.log(process.env.VUE_APP_MOCK_TYPE)
// console.log(process.env.VUE_APP_LOCAL_API)
// console.log(config)
// console.log(BaseData.getConfigArray('sex'))
// let a = 0;
// if  (a = 1){
//   alert(111)
// }
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')