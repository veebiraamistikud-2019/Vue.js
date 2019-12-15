import AppHeader from './components/AppHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  data() {
      return {
          todos: [
              {id: 0, text: "Tee kartuliputri"},
              {id: 1, text: "Osta poest kartulit ja piima"},
              {id: 2, text: "Lõpeta Veebiraamistike kodutööd"},
          ],
          nextId: 3
      };
  },
  components: {
    AppHeader,
    TodoInput,
    TodoItem,
  },
  methods: {
      addTodo(text) {
          this.todos.push({id: this.nextId, text: text});
          this.nextId++;
      },
      removeTodo(id) {
          let todos = this.todos;
          this.todos = todos.filter((todo) => todo.id != id);
      }
  }
}