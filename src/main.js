// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app=null;
/* eslint-disable no-new */
 firebase.auth().onAuthStateChanged(()=>{

  if(!app){

  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })

}

 })

