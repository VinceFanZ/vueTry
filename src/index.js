(function () {
  const app = new Vue({
    el: '#root',
    data: {
      message: 'msg'
    },
    beforeCreate () {
      console.log(this.$data)
    },
    created () {
      console.log(this.$data)
    },
    beforeMount () {
      console.log(this.$data)
    },
    mounted () {
      console.log(this.$data)
    }
  })
}())