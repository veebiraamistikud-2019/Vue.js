const LOCAL_STORAGE_KEY = 'todo-app-vue';
const todoApp = new Vue({
  el: '.todoapp', // element kuhu külge Vue pannakse, indexis on see section-i nime all
  data: {
    title: 'Bucket List!',
    todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ||  [
      { text: 'Poodi minek', isDone: true},
      { text: 'Kooli minna', isDone: true},
      { text: 'Õppida Vue.js selgeks', isDone: false}
    ],
    editing: null,
  },
  methods: {
    createTodo(event) {
      const textbox = event.target;
      this.todos.push({ text: textbox.value.trim(), isDone: false });
      textbox.value = '';
    },
    startEditing(todo) {
      this.editing = todo;
    },
    finishEditing(event) {
      if (!this.editing) { return; }
      const textbox = event.target;
      this.editing.text = textbox.value.trim();
      this.editing = null;
    },
    cancelEditing() {
      this.editing = null;
    },
    destroyTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    clearCompleted() {
      this.todos = this.activeTodos;
    },
  },
  computed: {
    activeTodos() {
      return this.todos.filter(t => !t.isDone);
    },
    completedTodos() {
      return this.todos.filter(t => t.isDone);
    }    
  },
  watch: {
    todos: {
      deep: true,
      handler(newValue) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
      }
    }
  },         
});
