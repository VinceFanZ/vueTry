
export default {
  name: 'todos',
  data () {
    return {
      ms: 'Vue'
    }
  },
  mounted () {
    console.log(this.$data)
    console.log('mounted')
  },
  methods: {
    addTodo (e) {
      if (e.keyCode !== 13) {
        return
      }
      console.log('sss')
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('addTodo', { text })
      }
      e.target.value = ''
    }
  },
  render (h) {
    return (
      <div>
        <section class="todoapp">
          <header class="header">
            <h1>todos</h1>
            <input 
              class="new-todo" 
              autofocus 
              autocomplete="off" 
              placeholder="What needs to be done?" 
              onKeyup={this.addTodo}
            />
          </header>
          <section class="main">
            <input class="toggle-all" type="checkbox" />
            <ul class="todo-list">
            </ul>
          </section>
          <footer class="footer">
            <span class="todo-count">
              <strong></strong>
            </span>
            <ul class="filters">
              <li>
                <a > ke</a>
              </li>
            </ul>
            <button class="clear-completed">
              Clear completed
            </button>
          </footer>
        </section>
        <router-link to='page'>to page</router-link>
      </div>
     )
   }
}
