let app = new Vue({
  el: '#app',
  data: () => {
    return {
      color: 0
    }
  },
  methods: {
    changeColor: () => {
      console.log('change')
      app.color++
    }
  },
})