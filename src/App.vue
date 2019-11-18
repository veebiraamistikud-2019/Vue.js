<template>
  <div id="app">
    <main id="todolist">
      <h1>TO-DO LIST with Vue</h1>
      <TodoList v-bind:todos="todos" @remove-todo="removeTodo" v-if="todos.length" />
      <p class="emptylist" v-else>List is empty!</p>
      <AddTodo @add-todo="addTodo" />
    </main>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default {
    name: "app",
    data() {
        return {
            todos: [
            { id: 1, title: "Sample completed", completed: true },
            { id: 2, title: "Sample not completed", completed: false }
            ]
        };
    },
    mounted() {},
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id);
        },
        addTodo(todo) {
            this.todos.push(todo);
        }
    },
    components: {
        TodoList, AddTodo
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    background: #7cb6fc;
    font-size: 1.1rem;
    font-family: "Helvetica", sans-serif;
    height: 100%;
}

#todolist {
    margin: 4rem auto;
    padding: 2rem 3rem 3rem;
    max-width: 500px;
    background: #617fa0;
    color: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
}

#todolist h1 {
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 1em;
}

#todolist .emptylist {
    margin-top: 2.6rem;
    text-align: center;
    letter-spacing: 0.05em;
    font-style: italic;
    opacity: 0.8;
}
</style>
