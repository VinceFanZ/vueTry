import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './components/App'
import './styles/index.css'

new Vue({
  el: '#root',
  render (h) {
    return (
      <App />
    )
  }
})


