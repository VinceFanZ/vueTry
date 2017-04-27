import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import router from './router'
import './styles/index.css'

const App = {
  name: 'app',
  render: h => {
    return (
      <div class="app">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    )
  }
}

new Vue({
  el: '#root',
  render: h => h(App),
  store,
  router
})


