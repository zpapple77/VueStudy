import Vue from 'vue'//引入vue对象，类似于<script src="vue.js"></script>
import App from './App.vue'//App.vue文件对象引入过来（vue项目的入口）

Vue.config.productionTip = false//控制台有一句提示信息

new Vue({//开始实例化cue
  render: h => h(App),//转变渲染App页面
}).$mount('#app')//渲染index.html到id叫app的标签上
