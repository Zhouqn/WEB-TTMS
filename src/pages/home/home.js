// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import home from './home.vue'
import router from '../../router'
import {get} from '../../units/myHttp'
Vue.config.productionTip = false;
router.beforeEach((to,form,next) => {
  get('getUser')
    .then((response) => {
      // console.log(response);
      if(response.status){
        next()
      }else {
        toastr.error('请登录！');
        setTimeout(() => location.href = 'index.html',1000)
      }
    });
});
/* eslint-disable no-new */
new Vue({
  el: '#home',
  router,
  components: {home},
  template: '<home/>'
});
